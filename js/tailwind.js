tailwind.config = {
    theme: {
      extend: {
        colors: {
          'headercolor': 'rgba(22, 12, 109, 0.50)',
         'hovercolor': '#1BBF00',
         'overlayColor': 'rgba(106, 98, 197, 0.9)',
         'paraColor': '#141135',
         'txtcolor': '#726E9E',
         'webColor':'#FAFAFE',
         'webhov':'#6B62C5',
         'readColor':'#1BBF00',
        },
        maxWidth: {
          'headerContainer': '1170px',
          'bannerContainer': '962px',
        },

        fontFamily: {
          'open': ['Open Sans', 'sans-serif'],
          'papri': ['Paprika', 'cursive'],

        },
        backgroundImage: {
          'banner': "url('image/bannerbg.png')",
          'counterbg': "url('image/bg.png')",
          'trd': "url('image/third.png')",
        },






      }
    }
  }