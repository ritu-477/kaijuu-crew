/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px", 
      },
      screens: { 
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1320px",
      },
      fontSize: {
        'custom2xl': "22px",
        'custom3xl': "28px",
        'custom-4xl': "32px",
        'custom-5xl': "40px",
        'custom-7xl': "70px",
        'custom-8xl': "72px",
        'custom-9xl': "145px",
      },

      fontFamily: {
        'oswald': "'oswald', sans-serif",
        'righteous': "'righteous', sans-serif",
      },

      lineHeight: {
        'custom-lg': "22.4px",
        'custom-xl': "39.4px",
        'custom-2xl': "34.67px",
        'custom-3xl': "41.6px",
        'custom-4xl': "44.8px",
        'custom-5xl': "54px",
        // 'custom-6xl': "64.8px",
        'custom-7xl': "62.4px",
        'custom-8xl': "72px",
        'custom-9xl': "126px",
      },

      colors: {
        'ink-black': "#0D0D0D", 
        'charcoal-black': "#001120",
        'red': "#FF002A",
      },

      backgroundImage: {
        'hero': "url('./assets/images/webp/hero-bg.webp')",
        'kaijuu': "url('./assets/images/webp/kaijuu-bg.webp')",
        'faq': "url('./assets/images/webp/faq-bg.webp')",
        'traits': "url('./assets/images/webp/traits-bg.webp')",
      },
    },
  },
  plugins: [],
};
