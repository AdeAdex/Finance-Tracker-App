// tailwind.config.js

module.exports = {
  content: [
   "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",  // Ensure you scan all app files
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3D51FF',   // Your custom blue color
        lightPurple: '#EEE5FF', // Your custom light purple color
        // You can add more custom colors here if needed
      },
      backgroundColor: {
        primary: '#3D51FF',    // Primary background color
        lightPurple: '#EEE5FF', // Light purple background color
      },
    },
  },
  plugins: [],
};
