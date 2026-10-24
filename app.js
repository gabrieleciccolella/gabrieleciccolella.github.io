(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach((node, i) => {
      node.classList.add('will-reveal');
      node.style.transitionDelay = `${(i % 3) * 55}ms`;
      observer.observe(node);
    });
  }
  const topButton = document.querySelector('.back-top');
  let scheduled = false;
  const update = () => {
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    document.documentElement.style.setProperty('--scroll-progress', distance > 0 ? Math.min(window.scrollY / distance, 1) : 0);
    topButton?.classList.toggle('is-visible', window.scrollY > 650);
    scheduled = false;
  };
  window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(update); } }, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
  topButton?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduced ? 'instant' : 'smooth' }));
  const filters = document.querySelectorAll('[data-filter]');
  const groups = document.querySelectorAll('[data-category]');
  filters.forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
    let visible = 0;
    groups.forEach(group => {
      group.hidden = selected !== 'all' && group.dataset.category !== selected;
      if (!group.hidden) {
        visible += group.querySelectorAll('.project-card').length;
        group.querySelectorAll('.will-reveal').forEach(node => node.classList.add('is-revealed'));
      }
    });
    const status = document.querySelector('.filter-status');
    if (status) status.textContent = `Showing ${visible} project${visible === 1 ? '' : 's'}${selected === 'all' ? ' across all categories' : ` in ${button.textContent.trim()}`}.`;
    update();
  }));
  document.querySelector('.copy-email')?.addEventListener('click', async event => {
    const button = event.currentTarget;
    const message = document.querySelector('.copy-status');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(button.dataset.email);
      if (message) message.textContent = 'Email address copied.';
    } catch {
      if (message) message.textContent = `Email: ${button.dataset.email}`;
    }
  });
})();
