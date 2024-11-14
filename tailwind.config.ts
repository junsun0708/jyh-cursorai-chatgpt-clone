import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'chat-sidebar': '#202123',
        'chat-background': '#343541',
      }
    },
  },
  plugins: [],
};

export default config;
