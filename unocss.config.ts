import config from '@slidev/client/uno.config'
import { mergeConfigs, presetWebFonts } from 'unocss'

export default mergeConfigs([
  config,
  {
    shortcuts: {
      'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-tl from-green-300 via-teal-400 to-purple-500',
    },
    presets: [
      presetWebFonts({
        fonts: {
          strong: 'Rubik Iso',
          fast: 'Ubuntu',
          hand: 'Caveat',
          mono: {
            name: 'IBM Plex Mono',
            italic: true,
          },
        },
      }),
    ],
  },
])
