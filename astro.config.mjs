import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
// Takes too long to build, especially with image library
// import compress from 'astro-compress'
import { defineConfig } from 'astro/config'

export default defineConfig({
    site: 'https://jiahua.io',
    integrations: [
        mdx(),
        sitemap(),
        tailwind(),
        react(),
        // compress(),
        image({
            serviceEntryPoint: '@astrojs/image/sharp',
        }),
    ],
})
