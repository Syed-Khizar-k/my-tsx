import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 2px 10px 10px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4c2cff",
        lime: "#24f8c7",
        grey: "#777",
        blacky: "#000000",
        pinkish: "#fff3f3",
      },
    },
  },
  plugins: [],
} satisfies Config;
