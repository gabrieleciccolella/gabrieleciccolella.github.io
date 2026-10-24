# Gabriele Ciccolella - Engineering Portfolio

Personal portfolio: **https://gabrieleciccolella.github.io/**

AI, machine learning and software engineering projects, with a dedicated case study and downloadable PDF for my master's thesis on BB84 quantum key distribution.

## Project categories

- **ML projects:** earthquake damage prediction, rehabilitation exercise recognition and cancer cell classification.
- **DL projects:** weather-aware photovoltaic power forecasting with an encoder-decoder LSTM.
- **QKD software emulator:** BB84 microservices simulation and master's thesis.
- **Software & AI systems:** conversational agent integration and the Zanzo multiplayer application.

## Maintain the site

The site is static HTML, CSS and JavaScript, hosted with GitHub Pages. No Node.js, package manager or production backend is required.

Project content and shared HTML are maintained in `build.py`. After editing the source, regenerate the committed HTML pages:

```bash
python build.py
python -m http.server 8080
```

Open http://localhost:8080. Edit `style.css` for presentation and `app.js` for interaction. Fonts are served locally from `assets/fonts`; there are no external JavaScript libraries or analytics.

Responsive layouts, project filters, keyboard-visible focus, scroll reveals, reading progress and reduced-motion support are included. All project pages remain readable without JavaScript.

## Contact

- Email: gabriele.ciccolella02@gmail.com
- Phone: +39 328 026 6827
- [LinkedIn](https://www.linkedin.com/in/gabriele-ciccolella-7023871b0/)
- Rome, Italy
