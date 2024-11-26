/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Design/index.html"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'1024px',
      llg:'1560px'
    },
    extend: {
      fontFamily:{
        'font-poppins':'Poppins',
        'font-pacifico':'Pacifico',
        'font-Host-Grotesk':'Host Grotesk'
      },
      colors:{
        
      },
    },
  },
  plugins: [],
}

