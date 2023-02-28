/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/ui/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e88e5",
        secondary: "#f50057",
        success: "#43a047",
        info: "#2196f3",
        warning: "#ff9800",
        danger: "#f44336",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
