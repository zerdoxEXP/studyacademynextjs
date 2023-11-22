import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        caveat: ['var(--font-caveat)', 'cursive'],
      },
      backgroundImage: {
        'page-gradient':
        'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3), transparent)',
      },
    },
  },
  plugins: [],
}
export default config
