/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080c14",
        surface: {
          50: "#182234",
          100: "#131b2e",
          200: "#0e1525",
          300: "#0a0f1c",
        },
        border: "#1e293b",
        cyber: {
          blue: "#38bdf8",
          purple: "#818cf8",
          emerald: "#10b981",
          amber: "#f59e0b",
          rose: "#f43f5e",
        },
        severity: {
          low: "#10b981",
          moderate: "#0ea5e9",
          elevated: "#f59e0b",
          high: "#f97316",
          critical: "#f43f5e",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px -5px rgba(56, 189, 248, 0.25)",
        "glow-rose": "0 0 20px -5px rgba(244, 63, 94, 0.3)",
        "glow-emerald": "0 0 20px -5px rgba(16, 185, 129, 0.25)",
      },
    },
  },
  plugins: [],
};
