import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

export const content = [
  "./page/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ".public/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    animation: {
      'infinite-scroll': 'infinite-scroll 25s linear infinite',
      scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
    },
    keyframes: {
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      },
      'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
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
