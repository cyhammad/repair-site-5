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
        primary: "#90DDF0",
        secondary: "#F0EDEE",
        tertiary: "#2C666E",

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
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
