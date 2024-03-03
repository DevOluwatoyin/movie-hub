/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "text-color": "#ffffff",
        "bg-color": "#171717",
        "bg-transparent1": "#171717bb",
        "bg-transparent2": "#000000e6",
        "box-shadow": "0 2px 8px rgba(0,0,0,.1)",
        "heart-color": "#800080",
        "heart-outline": "#562a5a",
        "heart-color-hover": "#ff00ff",
        "progress-bar": "#ff2901",
      },
    },
  },
  plugins: [],
};
