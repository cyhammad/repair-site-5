/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d4fd51",
        secondary: "#E5E5E5",

        siemensPrimary: "#019997",
        siemensSecondary: "#FFFFFF",
        siemensBlob: "#F0F4F9",

        boschPrimary: "#F80000",
        boschSecondary: "#2D3033",
        boschBlob: "#F0F1F2",

        samsungPrimary: "#000000",
        samsungSecondary: "#FFFFFF",
        samsungBlob: "#F7F7F7",

        lgPrimary: "#A50034",
        lgSecondary: "#000000",
        lgBlob: "#F6F3EB",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
