/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#fb4285',
          hover: '#e63a77',
          light: '#fef0f5',
        },
        slate: {
          850: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Bodoni Moda', 'Georgia', 'serif'],
        subheading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw + 1rem, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-1': ['clamp(2rem, 4vw + 0.5rem, 3.5rem)', { lineHeight: '1.2' }],
        'heading-2': ['clamp(1.5rem, 3vw + 0.5rem, 2.5rem)', { lineHeight: '1.25' }],
        'heading-3': ['clamp(1.25rem, 2vw + 0.25rem, 1.75rem)', { lineHeight: '1.3' }],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.08)',
        'card': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
