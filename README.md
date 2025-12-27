# Francisc Pap - Portfolio

My personal portfolio website with a space theme. Built with React, TypeScript, Vite, and Tailwind CSS while I'm in my 3rd year of Computer Science at UCD.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Formspree for the contact form

## What's Inside

- Hero section with my photo, contact buttons, and a dark mode toggle
- Sections covering my profile, skills, education, projects, and coursework
- Animated background with glassmorphism effects for that space aesthetic
- Contact form powered by Formspree, plus links to my email, phone, LinkedIn, and CV
- Ready to deploy on GitHub Pages, Netlify, Vercel, or wherever

## Getting Started

```bash
git clone https://github.com/ferikep/new-portfolio-website.git
cd new-portfolio-website
npm install
npm run dev
```

Then just open http://localhost:5173 in your browser.

## Scripts

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Starts the dev server with hot reload         |
| `npm run build`   | Builds for production                         |
| `npm run lint`    | Runs ESLint                                   |
| `npm run preview` | Preview the production build locally          |

## Project Structure

```
app/
|-- public/
|   |-- CV.pdf
|   |-- Headshot.jpg
|   |-- vite.svg
|-- src/
|   |-- App.tsx          # Main component with all the sections
|   |-- index.css        # Tailwind imports and global styles
|   |-- main.tsx
|   |-- assets/
|-- tailwind.config.js   # Custom colors, shadows, animations
|-- postcss.config.js
|-- tsconfig*.json
|-- package.json
```

## Customizing

- Most of the content is in `src/App.tsx` - there are arrays at the top for skills, projects, coursework, etc.
- Swap out `public/Headshot.jpg` and `public/CV.pdf` with your own files
- Colors and animations are in `tailwind.config.js`
- The starfield background and glass effects are in `src/index.css`

## Deploying

It's just a static site, so deployment is pretty straightforward:

1. **GitHub Pages**: Build with `npm run build` and push the `dist/` folder
2. **Netlify/Vercel/Cloudflare**: Point build command to `npm run build` and output to `dist`

## Contact

- Email: ferike.pap@gmail.com
- LinkedIn: [francisc-pap-a8b960330](https://www.linkedin.com/in/francisc-pap-a8b960330)
