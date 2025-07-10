import { mclTheme } from '@bobbykim/manguito-theme/mcl-theme'
import { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,ts,js,cjs}',
    './pages/**/*.{vue,ts,js,cjs}',
    './layouts/**/*.{vue,ts,js,cjs}',
    './node_modules/@bobbykim/**/*.{vue,ts,js,cjs}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        marker: ["'Permanent Marker'", 'cursive'],
      },
    },
  },
  plugins: [mclTheme],
}
