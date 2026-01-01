import { defineShikiSetup, ShikiSetupReturn } from '@slidev/types'

export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
    langs: [ 'jsx', 'js', 'sh', 'vue', 'html', 'css', 'markdown' ],
    transformers: [],
  }
})