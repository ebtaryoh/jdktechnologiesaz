/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Arial"],
      },
      colors: {
        jdk: {
          cyan: "#00e5ff",
          purple: "#d500f9",
          orange: "#ff9100",
          darkgreen: "#004d40",
          black: "#0a0a0a",
          dark: "#121212",
        },
        navy: {
          50: "#eef3ff",
          100: "#dbe7ff",
          200: "#b8d0ff",
          300: "#86b0ff",
          400: "#4f86ff",
          500: "#2b61ff",
          600: "#1f46db",
          700: "#1837b3",
          800: "#152f8f",
          900: "#0b1536",
          950: "#070e24",
        },
        teal: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(7, 14, 36, 0.12)",
        softer: "0 6px 18px rgba(7, 14, 36, 0.10)",
        glow: "0 10px 40px rgba(6, 182, 212, 0.18)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.92)", opacity: "0.5" },
          "100%": { transform: "scale(1.15)", opacity: "0" },
        },
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        shimmer: "shimmer 10s linear infinite",
        pulseRing: "pulseRing 1.8s ease-out infinite",
      },
    },
  },
  plugins: [],
};