import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{vue,ts}',
    './app/pages/**/*.vue',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#0f0f0f',
        card: '#1a1a1a',
        accent: '#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
} satisfies Config
