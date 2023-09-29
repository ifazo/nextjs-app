/** @type {import('tailwindcss').Config} */
export const content = [
  "./node_modules/flowbite-react/**/*.js",
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
};
export const plugins = [
  require( "flowbite/plugin" ),
  require( "@tailwindcss/aspect-ratio" ),
  require( "@tailwindcss/typography" ),
  "prettier-plugin-tailwindcss",
];
