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
        'border-sky': "url('/images/elements/dot-sky.svg')",
        'border-wood': "url('/images/elements/dot-wood.svg')",
        'blue-circle': "url('/images/elements/bg-blue-circle.png')"
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
        blink: 'blink 1.4s both infinite'
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
        '.bg-hero': {
          backgroundImage:
            'url(/images/home/hero/bg-hero-bottom.png), url(/images/home/hero/bg-hero.jpg)',
          backgroundRepeat: 'repeat-x, no-repeat',
          backgroundPosition: 'bottom, 84% 0',
          backgroundSize: '14px, 420vw'
        },
        '.bg-hero-desktop': {
          backgroundPosition: 'bottom, top',
          backgroundSize: '14px, 100vw'
        },
        '.bg-sphere-mobile': {
          backgroundSize: '9px auto',
          backgroundPosition: 'center'
        },
        '.text-shadow': {
          textShadow: '1px 1px 0 #000000'
        }
      });
    })
  ]
};
