/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    extend: {
      
      fontFamily: {
        parkinsans: ['Parkinsans', 'serif'],
        dmserif: ['DM Serif Text', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        roboto: ['Roboto', 'serif'],
        poppins: ['Poppins', 'serif'],
        oleo: ['Oleo Script', 'serif'],
        pinyon: ['Pinyon Script', 'cursive'],
        merriweather: ['Merriweather', 'serif'],
      },
      
      colors: {
        'dark-g': '#112317',
        'b-orange': '#ff5524',
        's-dark-g': '#1d4329',
        'd-gray': '#949494',
        'sdg-3': '#4ca146',
        'sdg-5': '#ef402d',
        'sdg-8': '#a31c44',
        'sdg-7': '#fbc412',
        'sdg-13': '#407f46',
      },
      
      boxShadow: {
        'orange-bx': '5px 5px 5px rgba(223, 131, 131, 0.8)',
      },

      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      cursor: {
        'custom-cursor': 'url(../assets/pictures/cursor.png), auto', // Replace with the online image URL
      },
    },
  },
  plugins: [],
};
