import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          "orange-dark": "#ff5016",
          "orange-light": "#ff9a16",
          black: "#0a0a0a",
        },
        bg: {
          default: "#ffffff",
          cream: "#fff7ec",
          stat: "#f2efe7",
        },
        ink: {
          primary: "#0a0a0a",
          secondary: "#6b6b6b",
          tertiary: "#9a9a9a",
        },
        line: {
          subtle: "#ececec",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Source Serif 4", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        content: "1200px",
        wide: "1080px",
        prose: "680px",
        hero: "760px",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #ff5016 0%, #ff9a16 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
