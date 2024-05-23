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
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite',
        'spin-slow': 'spin 3s linear infinite'
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
