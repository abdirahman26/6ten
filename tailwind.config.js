import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

export const content = [
  "./page/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    animation: {
      ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
    },
    keyframes: {
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      },
      infiniteSlider: {
        "0%": { transform: "translateX(0)" },
        "100%": {
          transform: "translateX(calc(-250px * 5))",
        },
      },
    },
  },
};
export const plugins = [
  function addVariablesForColors({ addBase, theme }) {
    const allColors = flattenColorPalette(theme("colors"));
    const newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );
    addBase({
      ":root": newVars,
    });
  },
];
