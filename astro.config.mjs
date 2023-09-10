import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
// Takes too long to build, especially with image library
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://jiahua.io',
    integrations: [
        mdx(),
        sitemap(),
        tailwind(),
        react(),
        compress({
            css: true,
            html: true,
            js: true,
            img: false,
            svg: false,
        }),
        prefetch(),
    ],
});
