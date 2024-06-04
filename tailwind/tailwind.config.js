/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
      },
      fontSize: {
        agakbesar: "150px",
      },

      backgroundImage: {
        kucing: 'url("../public/kucing.jpeg")',
        aestetic: 'url("../public/aestetic.png")',
        view: 'url("../public/view.png")',
        estetik: 'url("../public/estetik.jpg")',
        pp: 'url("../public/pp.jpg")',
        ganzz: 'url("../public/ganzz.jpg")',
        raw: 'url("../public/raw.webp")',
        kuliner: 'url("../public/kuliner.jpg")',
        kl: 'url("../public/kl.jpg")',
        tongseng: 'url("../public/tongseng.jpg")'
        
      },
      
      width: {
        500: "500px",
      },
    },
    plugins: [],
  },
};
