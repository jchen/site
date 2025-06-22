# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Jiahua Chen's personal website built with Astro and deployed on Netlify. The site includes a blog, project portfolio, and personal information.

## Common Commands

- `yarn dev` - Start development server at localhost:3000 with hot reload
- `yarn build` - Build production site to ./dist/ (includes copying _redirects file)
- `yarn preview` - Preview production build locally
- `yarn install` - Install dependencies
- `yarn astro ...` - Run Astro CLI commands (e.g., `yarn astro add`, `yarn astro check`)

## Architecture

### Tech Stack
- **Astro**: Static site generator with islands architecture
- **React**: Component framework for interactive elements
- **Tailwind CSS**: Utility-first CSS framework
- **MDX**: Markdown with JSX components for content
- **TypeScript**: Type-safe JavaScript

### Project Structure
- `src/pages/` - File-based routing (`.astro` and `.mdx` files become pages)
- `src/components/` - Reusable Astro and React components
- `src/layouts/` - Page layouts with shared structure (header, footer, nav)
- `src/content/` - Content collections with schema validation
- `src/styles/` - Global CSS styles
- `public/` - Static assets served directly

### Content Management
- Blog posts in `src/content/blog/` with frontmatter schema validation
- Projects in `src/pages/projects/` as MDX files with images
- Content schema defined in `src/content/config.ts`

### Path Aliases
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`

### Key Integrations
- MDX for content authoring
- React for interactive components
- Tailwind for styling
- Sitemap generation
- RSS feed at `/rss.xml`
- Asset compression (CSS, HTML, JS)
- Prefetch for navigation

### Typography
- Primary font: solitaire-mvb-pro
- Monospace font: source-code-pro

## Development Notes

The site uses Astro's islands architecture - most content is static HTML with selective hydration for interactive React components. The build process includes Netlify redirects file copying for deployment.