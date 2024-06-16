import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Purple
        secondary: "#3e484e", // Black text
        blue: "#d6e3ff", // Icon background
        darkBlue: "#465e8a", // Blue text
        lightBlue: "#f9fcff" // Card background
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;