# Colloquial Tamil — Learning Site

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

This repository contains the source for the "Colloquial Tamil" learning site built with Astro and the Starlight template. The site hosts lessons, audio transcripts, and exercises designed to help learners study spoken Tamil.

## Key Features

- Lesson content written in Markdown/MDX under `src/content/docs/`.
- Audio tracks with WebVTT transcripts in `src/assets/audio/`.
- Reusable UI components in `src/components/` (audio player, lists, links).
- Lightweight, fast static site built with Astro + Starlight.

## Quickstart (developer)

Prerequisites:

- Node.js 18+ (or LTS)
- npm (or pnpm/yarn)

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open the site at http://localhost:4321/ (default Astro dev port shown by the dev server).

Build for production and preview the build locally:

```bash
npm run build
npm run preview
```

## Repository Structure

Overview of the important files and folders you'll work with:

- `astro.config.mjs`: Astro configuration.
- `package.json`: Project scripts and dependencies.
- `src/`
  - `content.config.ts`: Content configuration for Starlight.
  - `content/docs/`: Markdown and MDX lesson pages and guides.
  - `components/`: Astro components (AudioTranscriptPlayer, FlexList, etc.).
  - `assets/audio/`: Audio files and `.vtt` transcript files.
  - `styles.css`: Global CSS used across the site.
- `public/`: Static files served as-is.

Examples from this repo:

- Transcripts: `src/assets/audio/track-01-01.vtt`, `src/assets/audio/track-00-01.vtt`, etc.
- Lessons: `src/content/docs/lessons/01-en-peeru-murugan.mdx` and related exercise files.

## Content Guidelines

- Create lesson pages as `.md` or `.mdx` files in `src/content/docs/` to expose them as routes.
- Keep audio files and matching WebVTT transcripts together in `src/assets/audio/` with consistent naming (e.g., `track-01-01.mp3` + `track-01-01.vtt`).
- Use the existing components for consistent layout and accessibility, for example the `AudioTranscriptPlayer.astro` component for synchronized audio + transcript playback.

## Audio & Transcripts

- Transcripts are stored as WebVTT (`.vtt`) files. Place them alongside audio files and reference the `.vtt` in the audio player component.
- When adding new audio, include metadata (title, duration, language) at the top of the content or in a small front-matter block.

## Development Notes

- Follow the style and component patterns already in `src/components/` when adding new UI.
- Keep content modular and use front-matter for metadata so Starlight can index pages properly.

## Deployment

The site is a static build and can be hosted on any static hosting provider (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

Typical deployment steps for Vercel/Netlify:

```bash
npm run build
# then point your deployment service to the generated `dist/` folder
```

## Contributing

Contributions are welcome.

## Troubleshooting

- If the site doesn't start, delete `node_modules` and `package-lock.json` (or lockfile for your package manager) and run `npm install` again.
- Check the browser console and terminal for build errors; missing imports or invalid front-matter are common causes.
