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
        },
        'wave-15': {
          '0%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(0)' },
          '100% ': { transform: 'rotate(15deg)' }
        },
        'wave-20': {
          '0%': { transform: 'rotate(-20deg)' },
          '50%': { transform: 'rotate(0)' },
          '100% ': { transform: 'rotate(-20deg)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite',
        'wave-15': 'wave-15 1s linear infinite',
        'wave-20': 'wave-20 1s linear infinite'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
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
    }),
    plugin(function ({ addComponents }) {
      addComponents({
        '.bg-add-to-cart': {
          backgroundImage: "url('/images/add-to-bag.svg')",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        },
        '.text-shadow': {
          textShadow: '1px 1px 0 #000000'
        }
      });
    })
  ]
};
