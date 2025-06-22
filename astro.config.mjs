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
    site: 'https://jiahuachen.com',
    integrations: [
        mdx(),
        sitemap(),
        tailwind(),
        react(),
        compress({
            css: true,
            html: {
                removeAttributeQuotes: false,
                caseSensitive: true,
                minifyCSS: true,
                minifyJS: true,
            },
            js: true,
            img: false,
            svg: false,
        }),
        prefetch({
            selector: "a[href^='/']", // Only prefetch internal links
        }),
    ],
    build: {
        inlineStylesheets: 'auto', // Inline small CSS automatically
    },
    vite: {
        build: {
            cssCodeSplit: true, // Split CSS for better caching
            rollupOptions: {
                output: {
                    manualChunks: {
                        'react-vendor': ['react', 'react-dom'],
                    },
                },
            },
        },
    },
});
