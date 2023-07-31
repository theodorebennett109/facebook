module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  enabled: true,
  content: ['./src/**/**/*.{html,vue,ts,js}'],
  safeList: [
    {
      pattern: /.*/,
    },
  ],
  theme: {
    extend: {
      /**
       * Color values are defined in /src/theme/colors.scss.
       * Color names should be sematic in order to provide
       * contextual alignment when thinking about themes.
       * E.g. primary-text-color (semantic) vs black-1 (literal)
       */

      gridTemplateColumns: {
        // Simple 14 column grid
        14: 'repeat(14, minmax(0, 1fr))',
      },
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        '1/5': '22%',
        '4/5': '78%',
        '1/5a': '23%',
        '4/5a': '77%',
        storiesH: '200px',
      },

      lineHeight: {
        'extra-loose': '2.5',
        12: '3rem',
      },
      spacing: {
        '22px': '22px',
        '112.5px': '112.5px',
        '125px': '125px',
        '72px': '72px',
        200: '200px',
        '24px': '24px',
        '54px': '54px',
        '10px': '10px',
        '106px': '106px',
        '20px': '20px',
        164: '164px',
        '60px': '60px',
        69: '69px',
        56: '56px',

        160: '160px',
        550: '550px',
        640: '640px',
        612: '612px',
        276: '276px',

        650: '650px',
        400: '400px',
        500: '500px',
        '292px': '292px',
        '1px': '1px',
        '1/3': '1.5px',

        1.5: '6px',
        4.5: '18px',
        4.8: '20px',
        9: '36px',
        7: '28px',
        300: '300px',
        360: '360px',
        31: '7rem',
        49: '13rem',
        72: '18rem',
        73: '300px',
        83: '20rem',
        84: '21rem',
        85: '22rem',
        86: '23rem',
        87: '24rem',
        88: '25rem',
        90: '27rem',
        96: '29rem',
        100: '30rem',
        368: '368px',
        '112px': '112px',

        sidebarH: 'calc( 100vh - 56px )',
      },

      colors: {
        '#e4e6eb': '#e4e6eb',
        '#f5f6f7': '#f5f6f7',
        '#e41e3f': '#e41e3f',
        '#1877f2': '#1877F2',
        '#f0f2f5': '#f0f2f5',
        '#e4e6e9': '#e4e6e9',
        'login-seperator': '#dadde1',
        'login-intro-text': '#1c1e21',
        error: '#f02849',

        app: {
          background: 'var(--app-background)',
          footer: 'var(--app-footer)',
        },
        typography: {
          primary: 'var(--typography-primary)',
          secondary: 'var(--typography-secondary)',
          success: 'var(--typography-success)',
          error: 'var(--typography-error)',
          light: 'var(--typography-light)',
        },
        button: {
          success: 'var(--button-success)',
          failure: 'var(--button-failure)',
        },
        border: {
          light: 'var(--border-light)',
        },
      },
      fontSize: {
        28: '28px',
        '8px': '8px',
        13: '13px',
        15: '15px',
        11: '11px',
        xs: '.75rem',
        sm: '.875rem',
        m: '15px',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
      },
      minWidth: {
        0: '0',
        '1/8': '12.5%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        500: '500px',
      },

      maxWidth: {
        0: '0',
        '1/8': '12.5%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        500: '500px',
        450: '450px',
        423: '423px',
        400: '400px',
        980: '980px',
        650: '650px',
        680: '680px',
      },

      minWidth: {
        500: '500px',
        450: '450px',
        423: '423px',
        400: '400px',
        300: '300px',
        980: '980px',
      },

      screens: {
        ss: '320px',
        sm: '640px',
        md: '768px',

        899: '899px',
        lg: '1000px',
        xl: '1280px',
        '2xl': '1536px',
        1159: '1159px',
        '1744px': '1744px',
        lg1076: '1076px',
      },
    },
  },
  variants: {
    visibility: ['group-hover'],
    // backgroundColor:['group-hover']
  },
  plugins: [],
};
