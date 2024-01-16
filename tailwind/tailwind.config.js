/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {fontFamily:{
      "Montserrat": "Montserrat",
    },
    fontSize: {
      agakbesar: "150px",
    },
    
    backgroundImage: {
      'kucing': 'url("../public/kucing.jpeg")',
      'aestetic': 'url("../public/aestetic.png")'
    },
  
  },
  plugins: [],
}
}
