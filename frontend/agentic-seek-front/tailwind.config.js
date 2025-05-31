/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0D0D12',
        'input-bg': '#1A1A23',
        'button-gray': '#2A2A35',
      },
      boxShadow: {
        'input': '0 2px 4px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
