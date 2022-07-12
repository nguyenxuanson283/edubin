
tailwind.config = {
  content: [],
  theme: {
    extend: {
        backgroundImage: {
          imagesbackground :"url('./images/bg-1.png')",
          background:"url('images/featured_courses_background.png')",
          background_our: "url('./images/bg-1.jpg')",
          background_feedback:"url('./images/student_background.jpg')",
         
        },
        colors:{
          mau : '#07294d',
          text_fix :'#092e56',
          header_color: '#07294d',
          blue_fixed: '#233B44',
          color_feedback: '#0A2948',
          color_upcoming:'#F4F4F4',
          text_background:'#F3BE04',
          background_footer:'#021D3A',
          background_book:'#EDF0F2',
          background_hover:'#18406A',
        },
        spacing: {
          '1px':'1px',
          '5px':'5px',
          '300px':'300px',
          '530px':'530px',
          '653px':'653px',
          '010':'10%',
          '025': '25%',
          '030': '30%',
          '035': '35%',
          '004':'40%',
          '04': '45%',
          '050':'50%',
          '060': '60%',
          '065': '65%',
          '070':'70%',
          '97': '75%',
          '080': '80%',
          '085': '85%',
          '090': '90%',
          '100':'100%'
        },
        borderWidth: {
          DEFAULT: '1px',
          '0': '0',
          '2': '2px',
          '3': '3px',
          '4': '4px',
          '6': '6px',
          '8': '8px',
        }
    },
    transitionDelay: {
      '0': '0ms',
      '2000': '2000ms',
    },
    transitionDuration: {
      '0': '0ms',
      '5000': '2000ms',
    },
    flexBasis: {
      '1/3': '33.3333333%',
      '2/7': '28.5714286%',
      '3/7': '42.8571429%',
      '4/7': '57.1428571%',
      '5/7': '71.4285714%',
      '6/7': '85.7142857%',
    },

  },
  plugins: [
    
  ],
}
