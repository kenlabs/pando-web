module.exports = {
  content: ["./**/*.html", "./src/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "540px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1140px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1400px) { ... }
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        black: "#080321",
        dark: "#131B4D",
        primary: "#3E7DFF",
        "body-color": "#B5B3BC",
        "body-color-2": "#637381",
        "gradient-1": "#E4F2FE",
        "gradient-2": "#FFEEFE",
        "light-bg": "#F5F8FF",
      },
      boxShadow: {
        "primary-hover": "0px 11px 20px rgba(139, 92, 246, 0.2)",
        "black-hover": "0px 11px 30px rgba(7, 16, 45, 0.15)",
        award: "0px 3px 100px rgba(11, 5, 22, 0.07)",
        testimonial: "0px 5px 50px rgba(178, 152, 236, 0.05)",
        faq: "0px 4px 50px rgba(0, 0, 0, 0.03)",
        "shape-1": "0px 0px 100px rgba(0, 0, 0, 0.03)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        image: "25px 40px 100px rgba(0, 0, 0, 0.1)",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

  prefix: "ud-",
};
