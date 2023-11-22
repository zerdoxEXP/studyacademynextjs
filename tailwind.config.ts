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
      boxShadow: {
        'glow': '10 0px 40px 20px rgba(0, 255, 255, 0.3)',
      }
    },
  },
  plugins: [],
}
export default config