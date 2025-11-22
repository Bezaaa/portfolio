/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // GitHub Dark Theme Palette
        gh: {
          bg: "#0d1117",        // Main background
          card: "#161b22",      // Card background
          border: "#30363d",    // Border color
          text: "#c9d1d9",      // Main text
          muted: "#8b949e",     // Secondary text
          blue: "#58a6ff",      // Links/Accents
          green: "#238636",     // Buttons
          purple: "#8957e5",    // Accents
        }
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}