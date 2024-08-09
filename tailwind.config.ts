const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'app-bg-color': '#f8fafc',
        'app-text-color': '#409bf9',
      },
      fontSize: {
        'placeholder-base': '16px',
        '.2-rem': 'clamp(.1rem, 2vw + .3rem, .2rem)',
        '.5-rem': 'clamp(.3rem, 2vw + .4rem, .5rem)',
        '.7-rem': 'clamp(.4rem, 2vw + .5rem, .7rem)',
        '.8-rem': 'clamp(.4rem, 2vw + .6rem, .8rem)',
        '.9-rem': 'clamp(.45rem, 2vw + .65rem, .9rem)',
        '1-rem': 'clamp(.5rem, 2vw + .7rem, 1rem)',
        '1.1-rem': 'clamp(.6rem, 2vw + .75rem, 1.1rem)',
        '1.2-rem': 'clamp(.25rem, 2vw + .75rem, 1.2rem)',
        '1.3-rem': 'clamp(.5rem, 2vw + .8rem, 1.3rem)',
        '1.5-rem': 'clamp(.3rem, 2vw + .8rem, 1.5rem)',
        '2-rem': 'clamp(1rem, 2vw + 1.2rem, 2rem)',
        '3-rem': 'clamp(1.5rem, 2vw + 1.7rem, 3rem)',
        '4-rem': 'clamp(2rem, 2vw + 1.9rem, 4rem)',
        '5-rem': 'clamp(2.5rem, 2vw + 2rem, 5rem)',
      },
      borderRadius: {
        'card-radius': '26px',
        'button-radius': '8px',
        'input-radius': '8px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        header: '0px 0px 10px 1px #2563eb20',
        card: '0px 0px 10px 1px #2563eb20',
      },
      keyframes: {
        // shimmer: {
        //   '0%': { backgroundPosition: '-100% 0' },
        //   '100%': { backgroundPosition: '100% 0' },
        // },
      },
      animation: {
        // shimmer: 'shimmer 1.5s infinite',
      },
      transitionProperty: {
        // 'btn-transition': 'all 0.2s ease-in',
        // 'btn-new-chat': 'all .5s cubic-bezier(0.165, 0.84, 0.44, 1)',
      },
      screens: {
        tv: '2080px',
      },
    },
  },
  plugins: [
    // function ({ addUtilities }: PluginAPI) {
    //   addUtilities({
    //     '.radial-gradient': {
    //       backgroundClip: 'text',
    //       WebkitBackgroundClip: 'text',
    //       color: 'transparent',
    //       backgroundImage: 'radial-gradient(51.69% 50% at 48.31% 50%, #fae9c0 0%, #b2a697 100%)',
    //       // lineHeight: 'unset !important',
    //     },
    //     '.orange-gradient': {
    //       backgroundClip: 'text',
    //       WebkitBackgroundClip: 'text',
    //       color: 'transparent',
    //       backgroundImage: 'linear-gradient(to right, #B78050 0%, #DECFB0 100%)',
    //     },
    //   });
    // },
  ],
};

export default config;
