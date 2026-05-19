import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          "orange-dark": "#ff5016",
          "orange-light": "#ff9a16",
          black: "#000000",
          "bg-dark": "#0a0a0a",
        },
        text: {
          primary: "#1a1a1a",
          secondary: "#6b6b6b",
        },
        border: {
          subtle: "#e5e5e5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
        prose: "720px",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(90deg, #ff5016 0%, #ff9a16 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
