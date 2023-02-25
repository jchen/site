import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import { defineConfig } from 'astro/config'

export default defineConfig({
    site: 'https://example.com',
    integrations: [
        mdx(),
        sitemap(),
        tailwind(),
        react(),
        compress(),
        image({
            serviceEntryPoint: '@astrojs/image/sharp',
        }),
    ],
})
