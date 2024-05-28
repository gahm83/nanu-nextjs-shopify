const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/images/**/*.svg'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cart-qty': "url('/images/shopping-bag.svg')",
        'border-sky': "url('/images/border-blue.svg')",
        'border-wood': "url('/images/border-wood.svg')",
        'border-pyramid-top': "url('/images/pyramid-top.png')",
        'border-pyramid-bottom': "url('/images/pyramid-bottom.png')"
      },
      backgroundSize: {
        'sze-sm': '14px, 420vw',
        'sze-lg': '14px, 100vw'
      },
      backgroundPosition: {
        'pos-sm': 'bottom, 84% 0',
        'pos-lg': 'bottom. top'
      },
      fontFamily: {
        athiti: 'Athiti',
        'camera-obscura': 'Camera-Obscura',
        'plam-canyon-drive': 'Plam-Canyon-Drive',
        portland: 'Portland'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          from: { transform: 'scale(0)' },
          to: { transform: 'scale(1)' }
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        'spin-reverse': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' }
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%, 75%': { transform: 'scale(1.2)' },
          '50%': { transform: 'scale(1.1)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        heartbeat: 'heartbeat 1s infinite',
        blink: 'blink .5s ease-in infinite alternate',
        'blink-delayed': 'blink .5s ease-in .5s infinite alternate',
        'blink-1': 'blink .5s ease-in .25s infinite alternate',
        'blink-2': 'blink .5s ease-in .5s infinite alternate',
        'blink-3': 'blink .5s ease-in .75s infinite alternate',
        'blink-4': 'blink .5s ease-in 1s infinite alternate',
        spin: 'spin 5s linear infinite',
        'spin-reverse': 'spin-reverse 5s linear infinite'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    require('postcss-nested'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};
