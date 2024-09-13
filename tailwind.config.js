/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Urbanist: ["Urbanist"],
      },
      colors: {
        // base
        'cust-black': '#0F0F0F',
        'cust-white': '#FBFBFB',

        // primary
        'cust-cream': '#F4F4F4',
        'cust-dark-blue': '#022D42',

        // secondary
        'cust-pale-cream': '#DADAC9',
        'cust-pale-yellow': '#F4FFC4',
      },
    },
  },
  plugins: [],
}