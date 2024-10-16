import MarkdownItMagicLink from 'markdown-it-magic-link'
import { defineConfig } from 'vite'
import '@slidev/cli'

export default defineConfig({
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(MarkdownItMagicLink, {
          linksMap: {
            NuxtLabs: {
              link: 'https://nuxtlabs.com',
              imageUrl: 'https://nuxtlabs.com/icon.png',
            },
            TypeScript: 'https://github.com/microsoft/TypeScript',
            Vitest: 'https://github.com/vitest-dev/vitest',
            Slidev: 'https://github.com/slidevjs/slidev',
            UnoCSS: 'https://github.com/unocss/unocss',
            Vue: 'https://github.com/vuejs/core',
            Nuxt: 'https://github.com/nuxt/nuxt',
            Vite: 'https://github.com/vitejs/vite',
            ESLint: 'https://github.com/eslint/eslint',
            Netlify: {
              link: 'https://netlify.com',
              imageUrl: 'https://github.com/netlify.png',
            },
            Stackblitz: {
              link: 'https://stackblitz.com',
              imageUrl: 'https://github.com/stackblitz.png',
            },
            Vercel: {
              link: 'https://vercel.com',
              imageUrl: 'https://github.com/vercel.png',
            },
            Prettier: 'https://github.com/prettier/prettier',
          },
        })
      },
    },
  },
  optimizeDeps: {
    exclude: [
      '@vue/compiler-sfc',
      'react',
      'react-dom/client',
      '@babel/standalone',
    ],
  },
})
