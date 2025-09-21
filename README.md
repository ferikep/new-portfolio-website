# Francisc Pap - Portfolio

A sleek, space-themed personal site built with React, TypeScript, Vite, and Tailwind CSS. It introduces Francisc Pap (3rd-year Computer Science @ UCD), showcases projects and coursework, highlights skills, and provides multiple contact avenues (including a Formspree form and CV download).

## Tech Stack

- React 18 + TypeScript
- Vite build tooling
- Tailwind CSS with custom design tokens
- Framer Motion for micro-interactions
- Formspree form handling

## Features

- Responsive hero section with headshot, quick-contact buttons, and dark-mode toggle
- Profile, skills, education, project, and coursework sections with deliberate copy and badges
- Animated background orbs and glassmorphism styling for a space vibe
- Formspree-powered contact form plus direct email, phone, LinkedIn, and CV download links
- Build-ready for static hosting (GitHub Pages, Netlify, Vercel, etc.)

## Getting Started

~~~bash
# install dependencies
git clone https://github.com/ferikep/new-portfolio-website.git
cd new-portfolio-website
npm install

# start local dev server
npm run dev
~~~

Open the printed URL (defaults to http://localhost:5173) to preview.

## Available Scripts

| Command           | Description                                   |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Vite dev server with hot module reload        |
| `npm run build`   | Type-check and create production build        |
| `npm run lint`    | Run ESLint (if you add lint configuration)    |
| `npm run preview` | Preview the production bundle locally         |

## Project Structure

```
app/
|-- public/
|   |-- CV.pdf           # Downloaded via header buttons
|   |-- Headshot.jpg     # Displayed in hero section
|   |-- vite.svg
|-- src/
|   |-- App.tsx          # Page sections and animations
|   |-- index.css        # Tailwind entry + global styling
|   |-- main.tsx         # React bootstrap
|   |-- assets/          # Vite starter assets (safe to prune)
|-- tailwind.config.js   # Custom palette, shadows, keyframes
|-- postcss.config.js
|-- tsconfig*.json
|-- package.json
```

## Customization Notes

- Update text/content inside `src/App.tsx`. Each section (skills, coursework, projects) is configured with arrays near the top of the file.
- Replace assets in `public/` as needed. The hero headshot references `/Headshot.jpg`; the CV button points to `/CV.pdf`.
- Tailwind design tokens live in `tailwind.config.js`. Adjust colors, shadows, or animations there.
- Global effects (starfield gradients, glass panels, badges) are defined in `src/index.css`.

## Deployment

The site is a static bundle. Common options:

1. **GitHub Pages**: run `npm run build`, then publish the `dist/` folder with your preferred Pages workflow.
2. **Netlify / Vercel / Cloudflare**: set build command to `npm run build` and output directory to `dist`.

## Contact

- Email: [ferike.pap@gmail.com](mailto:ferike.pap@gmail.com)
- LinkedIn: [linkedin.com/in/francisc-pap-a8b960330](https://www.linkedin.com/in/francisc-pap-a8b960330)
