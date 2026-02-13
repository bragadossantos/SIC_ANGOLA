/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'sic-blue': '#0f172a',      // Azul escuro gov
        'sic-blue-light': '#1e293b',
        'sic-red': '#dc2626',       // Alerta/CTA
        'sic-gray': '#64748b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}