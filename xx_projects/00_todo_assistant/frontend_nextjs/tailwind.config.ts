import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#DD2476",
        "secondary":"#FF5125"
      }
    },
  },
  plugins: [],
}
export default config
