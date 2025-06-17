import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 3px 0px rgba(0, 0, 0, 0.75)",
        super_box: "0px 0px 20px 0px rgba(0, 0, 0, 0.75)",
      },
    },
  },
  plugins: [],
} satisfies Config;
