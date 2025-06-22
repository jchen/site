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

## Performance Optimizations

The site has been optimized for fast loading with the following implementations:

### Build Configuration
- **CSS Code Splitting**: Enabled for better caching (`cssCodeSplit: true`)
- **Manual Chunks**: React vendor code separated for optimal caching
- **Prefetch Optimization**: Only internal links prefetched (`selector: "a[href^='/']"`)
- **Inline Stylesheets**: Small CSS automatically inlined (`inlineStylesheets: 'auto'`)

### Image Optimization
- **Responsive Images**: All images use `widths` and `sizes` attributes for optimal loading
- **Lazy Loading**: All images and screenshots use `loading="lazy"`
- **WebP Format**: Images automatically converted to WebP for smaller file sizes
- **Multiple Sizes**: Screenshots use `widths={[300, 600]}`, posters use `widths={[400, 800, 1200]}`

### Resource Loading
- **Font Preconnect**: Adobe Fonts use preconnect for faster loading
- **Favicon Preload**: Critical favicon resource preloaded
- **YouTube Lazy Loading**: Video embeds use `params="loading=lazy"`

### Compression
- **Enhanced HTML Compression**: CSS and JS minified within HTML
- **Asset Compression**: All CSS, HTML, and JS files compressed
- **Image Compression**: Aggressive WebP compression for ~50-90% size reduction

### File Naming Convention
- **Image Assets**: Project images prefixed with `_` to avoid Astro processing warnings
- **Import Paths**: Images imported as `import('./_image.png')` in MDX files

### Performance Results
- Build generates ~43 optimized image variants
- HTML pages compressed 5-25% in size
- JavaScript bundle split for better caching (184KB main, separate vendor chunk)
- Responsive image sizes automatically served based on device capabilities