module.exports = {
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
  theme: {
    extend: {
      colors: {
        'open': '#593eff',
        'announcement': '#0cb52b',
        'danger': '#e1391f',
        'greythree': '#777777',
        'closed': '#e8624d',
        'dark-grey-blue': '#354052',
        'greyish': '#a3a3a3',
        'marine-blue': '#00335d',
        'darkblack': '#111111',
        'brown': '#555555',
        'blue': '#3563d9',
        'blue-1a': '#1A82D5',
        'brownish': '#606060',
        'medblack': '#090a12',
        'secondbrown': '#6d6d6d',
        'slateblue': '#192356',
        'coolBlue': '#4d78bb',
        'remaining':'#e3ffe8',
        'grassy-green': '#419c00',
        'tomato-red': '#f01800',
        'warning': '#ea670d',
        'vibrant-purple': '#9f09c9',
        'white-ten': '#eeeeee',
        'lite': '#f5f5f5',
        'royalblue': '#593eff',
        'liteblue': '#f1f4fa',
        'iceblue': '#f2f4ff',
        'lightgray': '#b3b3b3',
        'palegreynine': '#e6eaee',
        'grey': '#f6f6f6',
        'warm-blue': '#3563d9',
        'disable': '#e3e3e3',
        'default': '#dcdcdc',
        'white-three': '#dddddd',
        'greyfourteen': '#dfe3e9',
        'warm-grey': '#797979',
        'coolgreythree': '#9a9fa8',
        'darkgreythree': '#252626',
        'extralite': '#fafafa',
        'borderlite': '#3563d9',
        'navy': '#414F64',
        'warmliteblue': '#E8EDF3',
        'greyis-text': '#969CA6',
        'greyis-label': '#8B9299',
        'greyis-bar': '#F4F7F9',
      },
      backgroundOpacity: {
        '35': '0.35',
        '10': '0.10'
      },
      borderRadius: {
        '10': '0.625rem',
        '16': '1rem',
      },
      placeholderColor: {
        'primary': '#999999'
      },
      fontSize: {
        '13': '0.8125rem',
        '15': '0.9375rem',
        '26': '1.625rem',
        '22': '1.375rem',
        '28': '1.75rem'
      },
      zIndex:{
        '9999': '9999'
      },
      margin: {
        '18': '1.125rem'
      },
      height: {
        '300': '18.75rem',
        '450': '28.125rem',
        '120': '7.5rem',
        '278': '17.375rem',
        '398': '24.875rem',
        '400': '25rem',
        '448': '28rem',
        '280': '17.5rem',
        '182': '11.375rem',
        '74': '4.625rem',
        '52': '3.25rem',
        '600': '37.5rem',
        '45': '2.8125rem'
      },
      width: {
        '74': '4.625rem',
        '392': '24.5rem',
        '298': '18.625rem',
        '276': '17.25rem',
        '300': '18.75rem',
        '407': '25.4375rem',
        '1120': '70rem',
        '1424': '89rem',
        '416' : '26rem',
        '880' : '55rem',
        'cell' : '14.2857142857%',
        '500' : '31.35rem'
      },
      flex: { 
        100: '0 0 100%' 
      },
      maxWidth: { 
        840: '52.5rem'
      },
      minWidth: {
        220: '13.75rem',
        245: '15.3125rem'
      },
      gridTemplateColumns: {
        'darian': '40% repeat(1, minmax(0, 1fr))',
        'samvat': '280px repeat(1, minmax(0, 1fr))',
        'runic': '174px repeat(1, minmax(0, 1fr))'
      },
      minWidth: {
        '220': '13.75rem',
        '245': '15.3125rem'
      },
      minHeight: {
        '700': '43.75rem',
        '141': '8.8125rem',
        '900': '56.25rem'
      },
      borderWidth: {
        'custom': '1px'
      },
      fontFamily:{
        'cabin': ['Cabin', 'sans-serif']
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        
        'tablet': '991px',
        // => @media (min-width: 991px) { ... }
        
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        
        'ipad': { 'max': '991px' },
        // => @media (max-width: 991px) { ... }

        'ipadx': { 'max': '1400px' },
        // => @media (max-width: 1400px) { ... }

        'mobile': {'max': '767px'},
        // => @media (max-width: 767px) { ... }

        'sm-mobile': {'max': '480px'},
        // => @media (max-width: 480px) { ... }
      }
    }
  }
}
