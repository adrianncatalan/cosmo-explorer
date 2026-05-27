# Cosmo Explorer

A modern web platform built with Vue 3 that brings NASA's space data directly to your browser.

🌐 **Live site:** [cosmexplorer.netlify.app](https://cosmexplorer.netlify.app/)

## Features

- **APOD** — Astronomy Picture of the Day with full description and metadata
- **NeoWs** — Near Earth Object Web Service, browse asteroids and their orbital data
- **EPIC** — Daily full disc imagery of the Earth from the DSCOVR satellite

## Tech Stack

- Vue 3 with Composition API and `<script setup>`
- Vue Router
- Tailwind CSS + MudBlazor-inspired design
- Vite
- Netlify (CI/CD from GitHub)

## Architecture

Module-based folder structure:

```
src/
├── modules/
│   ├── apod/
│   ├── epic/
│   ├── home/
│   ├── neows/
│   └── shared/
│       ├── components/
│       ├── composables/
│       ├── pages/
│       └── services/
├── router/
├── App.vue
└── main.js
```

## Getting Started

```bash
npm install
```

Create a `.env` file at the project root:
VITE_NASA_API_KEY=your_key_here

Get a free API key at [api.nasa.gov](https://api.nasa.gov/)

```bash
npm run dev
```

## Roadmap

Upcoming sections powered by additional NASA API endpoints:

- DONKI — Space Weather Database
- EONET — Earth Observatory Natural Event Tracker
- Exoplanet Archive
- GIBS — Global Imagery Browse Services
- Insight — Mars Weather Service
- NASA Image and Video Library
- SSD/CNEOS — Solar System Dynamics
- TechTransfer — NASA Patents and Software
- TLE API — Earth-Orbiting Objects
- And more...

## License

Apache-2.0
