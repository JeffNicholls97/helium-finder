module.exports = {
  mode:'jit',
  purge: [
    './*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hind', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      screens: {
        'xs': '400px',
      },
      fontSize: {
        mini: '.5rem',
        xxs: '.6rem',
      },
      margin: {
        '-usp': '-45px',
        '25': '5.5rem',
        '30': '6rem',
        '-100': '-10rem'
      },
      colors: {
        
      },
      boxShadow: {
        'all-sm': '0 0 5px 1px rgba(0,0,0,0.1)',
        'all-md': '0 0 10px 2px rgba(0,0,0,0.2)',
        'all-lg': '0 0 15px 3px rgba(0,0,0,0.2)',
        'category': '0px 10px 7px 0px rgba(0, 0, 0, 0.08)'
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
      width: {
        '1/30': '3%',
        '1/8': '12.5%',
        '2/8': '25%',
        '3/8': '37.5%',
        '4/8': '50%',
        '5/8': '62.5%',
        '6/8': '75%',
        '7/8': '87.5%',
        '1/20': '5%',
        '2/20': '10%',
        '3/20': '15%',
        '4/20': '20%',
        '5/20': '25%',
        '6/20': '30%',
        '7/20': '35%',
        '8/20': '40%',
        '9/20': '45%',
        '10/20': '50%',
        '11/20': '55%',
        '12/20': '60%',
        '13/20': '65%',
        '14/20': '70%',
        '15/20': '75%',
        '16/20': '80%',
        '17/20': '85%',
        '18/20': '90%',
        '19/20': '95%',
        'screen-25': '25vw',
        'screen-50': '50vw',
        'screen-75': '75vw',
        'screen-80': '80vw',
        'screen-90': '90vw',
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '1024px',
        'screen-xl': '1280px',
        'screen-contain': '1440px',
      },
      minWidth: {
        '1/8': '12.5%',
        '2/8': '25%',
        '3/8': '37.5%',
        '4/8': '50%',
        '5/8': '62.5%',
        '6/8': '75%',
        '7/8': '87.5%',
        '1/20': '5%',
        '2/20': '10%',
        '3/20': '15%',
        '4/20': '20%',
        '5/20': '25%',
        '6/20': '30%',
        '7/20': '35%',
        '8/20': '40%',
        '9/20': '45%',
        '10/20': '50%',
        '11/20': '55%',
        '12/20': '60%',
        '13/20': '65%',
        '14/20': '70%',
        '15/20': '75%',
        '16/20': '80%',
        '17/20': '85%',
        '18/20': '90%',
        '19/20': '95%',
        'screen-25': '25vw',
        'screen-50': '50vw',
        'screen-75': '75vw',
        'screen-80': '80vw',
        'screen-90': '90vw',
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '1024px',
        'screen-xl': '1280px',
        'screen-contain': '1440px',
      },
      maxWidth: {
        '1/8': '12.5%',
        '2/8': '25%',
        '3/8': '37.5%',
        '4/8': '50%',
        '5/8': '62.5%',
        '6/8': '75%',
        '7/8': '87.5%',
        '1/20': '5%',
        '2/20': '10%',
        '3/20': '15%',
        '4/20': '20%',
        '5/20': '25%',
        '6/20': '30%',
        '7/20': '35%',
        '8/20': '40%',
        '9/20': '45%',
        '10/20': '50%',
        '11/20': '55%',
        '12/20': '60%',
        '13/20': '65%',
        '14/20': '70%',
        '15/20': '75%',
        '16/20': '80%',
        '17/20': '85%',
        '18/20': '90%',
        '19/20': '95%',
        'screen-25': '25vw',
        'screen-50': '50vw',
        'screen-75': '75vw',
        'screen-80': '80vw',
        'screen-90': '90vw',
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '1024px',
        'screen-xl': '1280px',
        'screen-contain': '1440px',
        'p100': '100px',
        'p120': '120px',
        'p140': '140px',
        'p160': '160px',
        'p180': '180px',
        'p200': '200px',
      },
      height: {
        '1/30': '7%',
        '2/30': '93%',
        'inherit': 'inherit',
        '1/20': '5%',
        '2/20': '10%',
        '3/20': '15%',
        '4/20': '20%',
        '5/20': '25%',
        '6/20': '30%',
        '7/20': '35%',
        '8/20': '40%',
        '9/20': '45%',
        '10/20': '50%',
        '11/20': '55%',
        '12/20': '60%',
        '13/20': '65%',
        '14/20': '70%',
        '15/20': '75%',
        '16/20': '80%',
        '17/20': '85%',
        '18/20': '90%',
        '19/20': '95%',
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-75': '75vh',
        '100': '100px',
        '125': '125px',
        '150': '150px',
        '175': '175px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '450': '450px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
        '800': '800px',
        '900': '900px',
      },
      minHeight: {
        'inherit': 'inherit',
        '1/20': '5%',
        '2/20': '10%',
        '3/20': '15%',
        '4/20': '20%',
        '5/20': '25%',
        '6/20': '30%',
        '7/20': '35%',
        '8/20': '40%',
        '9/20': '45%',
        '10/20': '50%',
        '11/20': '55%',
        '12/20': '60%',
        '13/20': '65%',
        '14/20': '70%',
        '15/20': '75%',
        '16/20': '80%',
        '17/20': '85%',
        '18/20': '90%',
        '19/20': '95%',
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-75': '75vh',
        '100': '100px',
        '125': '125px',
        '150': '150px',
        '175': '175px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '450': '450px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
        '800': '800px',
      },
      maxHeight: {
        'inherit': 'inherit',
        '1/20': '5%',
        '2/20': '10%',
        '3/20': '15%',
        '4/20': '20%',
        '5/20': '25%',
        '6/20': '30%',
        '7/20': '35%',
        '8/20': '40%',
        '9/20': '45%',
        '10/20': '50%',
        '11/20': '55%',
        '12/20': '60%',
        '13/20': '65%',
        '14/20': '70%',
        '15/20': '75%',
        '16/20': '80%',
        '17/20': '85%',
        '18/20': '90%',
        '19/20': '95%',
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-75': '75vh',
        'unlimit': '999em',
        '100': '100px',
        '125': '125px',
        '150': '150px',
        '175': '175px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '450': '450px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
        '800': '800px',
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}