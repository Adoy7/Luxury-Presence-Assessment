/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'richBlack': '#04030F',
        'ghostWhite': '#ECEBF3',
        'ashGray': '#C7D6D5',
        'dimGray': '#6D7275',
        'nightBlack': '#0C120C',
      },
      fontFamily: {
        'Karla': ['Karla'],
        'EB': ['EB Garamond']
      },
      fontSize: {
        '55': '55px',
        '32': '32px',
        '22': '22px',
        '17': '17px',
      },
      height: {
        '600': '600px',
        '930': '930px',
        '550': '550px',
        '448': '448px',
        '455': '455px',
        '400': '400px',
        '265': '265px',
        '250': '250px',
        '75': '75px'
      },
      width: {
        '1120': '1120px',
        '810': '50.625rem',
        '990': '990px',
        '930': '930px',
        '1047': '1047px',
        '600': '600px',
        '580': '580px',
        '560': '560px',
        '550': '550px',
        '333': '333px',
        '320': '320px',
        '265': '265px',
        '200': '200px',
        '455': '455px',
        '285': '285px',
        '75': '75px'
      },
      spacing: {
        '740': '740px',
        '570': '570px',
        '255': '255px',
        '75': '1200px',
        '240px': '240px',
        '205': '205px',
        '160': '160px',
        '154': '154px',
        '135': '135px',
        '100': '100px',
        '50': '50px',
        '30': '30px',
        '25': '25px',
      },
      borderRadius: {
        '32': '32px',
      },
    },
  plugins: [],
  }
}