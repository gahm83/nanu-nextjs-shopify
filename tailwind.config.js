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
        'border-wood': "url('/images/border-wood.svg')"
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
        }
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
