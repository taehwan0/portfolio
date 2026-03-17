/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
        'accent-bg': 'var(--accent-bg)',
        'accent-code-bg': 'var(--accent-code-bg)',
        'accent-code-text': 'var(--accent-code-text)',
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
