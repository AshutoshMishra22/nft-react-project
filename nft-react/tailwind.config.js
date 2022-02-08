module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  // darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      screens: {
        mf: "990px",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
        "scale-up-center": {
          "0%": {
            "-webkit-transform":
              "rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg)",
            transform:
              "rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg)",
            opacity: 0,
          },
          "100%": {
            "-webkit-transform":
              "rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)",
            transform:
              "rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)",
            opacity: 1,
          },
        },
        "bg-pan-right": {
          "0%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
        "scale-up-center": "scale-up-center 0.5s ease-in",
        "bg-pan-right": "bg-pan-right 8s infinite both",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
