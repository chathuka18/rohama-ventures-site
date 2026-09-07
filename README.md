# ROHAMA Ventures Website

Multi-page React + Tailwind CSS website for ROHAMA Ventures.

## Requirements

- Node.js 18 or newer (Node 20 LTS recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Tech stack

- React 18
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- React Three Fiber / Three.js

The 3D hero is implemented directly with React Three Fiber and Three.js, without Drei, to keep the React 18 dependency tree stable.
