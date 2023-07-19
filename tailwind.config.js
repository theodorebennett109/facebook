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
        '112px': '112px',
        '72px': '72px',
        368: '368px',
        '24px': '24px',
        '54px': '54px',
        '10px': '10px',
        '106px': '106px',
        '20px': '20px',
        164: '164px',
        '60px': '60px',
        69: '69px',
        56: '56px',
        bioEditW: '212.22px',
        biooEditH: '78px',
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
        '1/2': '3.35px',
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
        83: '20rem',
        84: '21rem',
        85: '22rem',
        86: '23rem',
        87: '24rem',
        88: '25rem',
        90: '27rem',
        sidebarH: '900px',

        96: '29rem',
        100: '30rem',
        average: '100%',
        'titlebar-height': '58px',
        'fb-logo-size': '120px',
        search: '600px',
      },

      backgroundPosition: {
        groupPos: 'center top -1.5rem',
        marketPos: 'center bottom -1.5rem',
        watchPos: 'center bottom ',
        allPos: 'left bottom 194px ',
      },
      backgroundSize: {
        allSize: '26px 312px',
      },

      backgroundImage: {
        home: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/0eUpMp-7pYy.png')",
        friends:
          "url('https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/cHoMfSsiHSi.png')",
        groups:
          "url('https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/CGp-6SWWRyX.png')",
        market:
          "url('https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/CGp-6SWWRyX.png')",
        watch:
          "url('https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/CGp-6SWWRyX.png')",
        all: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/tkJdZ7U1seJ.png')",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        8: 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration
        layout: '56px auto',
      },
      gridTemplateColumns: {
        // Simple 8 row grid
        8: 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration

        'title-layout': '330px 2fr 1fr',
      },
      colors: {
        '#e4e6eb': '#e4e6eb',
        '#f5f6f7': '#f5f6f7',
        '#e41e3f': '#e41e3f',
        error: '#f02849',
        footerLink: '#727679',
        'placeholder-color': '#90949c',
        'input-border-color': 'rgb(221, 223, 226)',
        'darker-green': '#166fe5',
        'darker-green': '#36a420',
        'login-seperator': '#dadde1',
        'login-intro-text': '#1c1e21',
        'text-disable-save': '#BCC0C4',
        selectHobbyBorder: '#ced0d4',
        saveCol: '#1B74E4',
        iconBorder: '#0000001a',
        addHobbiebg: '#caedf9',
        '#1877f2': '#1877F2',
        createAvatarButton: '#E7F3FF',
        rec: '#77797c',

        forget: '#0D55B5',
        sectionLine: '#e5e5e5',
        cancelX: '#606770',
        cancel: '#e4e6eb',
        settingLink: '#216fdb',
        'sidebar-divider-hr': '#ced0d4',
        highlighter: '#1876f2',
        'home-links-hover': '#00000000',
        emoji: '#fcd35d',
        heart: '#f03253',
        placeholder: '#727477',
        '#f0f2f5': '#f0f2f5',
        '#e4e6e9': '#e4e6e9',

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
        sss: '0.6rem',
        ss: '0.7rem',
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
        full: '100%',
        feed: '680px',
        500: '500px',
      },

      maxWidth: {
        0: '0',
        '1/8': '12.5%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
        feedMid590: '590px',
        feedReduce500: '500px',
        500: '500px',
        450: '450px',
        423: '423px',
        400: '400px',
        980: '980px',
        650: '650px',
        680: '680px',
      },

      maxHeight: {
        0: '0',
        '1/8': '12.5%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
        feed: '680px',
        feedMid590: '590px',
        feedReduce500: '500px',
        500: '500px',
        450: '450px',
        423: '423px',
        400: '400px',
        650: '650px',
        980: '980px',
      },

      minWidth: {
        0: '0',
        '1/8': '12.5%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
        feed: '680px',
        feedMid590: '590px',
        feedReduce500: '500px',
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
        mdd: '950px',
        899: '899px',
        lg: '1000px',
        xl: '1280px',
        '2xl': '1536px',
        1159: '1159px',

        '1744px': '1744px',
        'feed-MidPoint': '1650px',
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
