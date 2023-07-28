/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { 
    
      animation:{
        // đây là animation sử dụng (1-0)
        wiggle:'wiggle 0.5s ease-in-out 1',// display SeeMore
        //Hwight la scale(0-1)
        Hwiggle:'Hwiggle .89s ease-in-out 1',// display SeeMore
        // bgwight scale(1-0)
        bgHidden_Start:'bgHidden_Start .85s ease-in-out 1',//Background SeeMore
        bgHiddenEnd:'bgHiddenEnd .84s ease-in-out 1',//Background SeeMore
        SupportSource:'SupportSource 0.75s ease-in-out 1',//Animation
        scrollLoginLogUp:'scrollLoginLogUp .2s ease-in-out 1',//Animation
        OpacityBackgroundBlack:'OpacityBackgroundBlack .2s ease-in-out 1',//Animation

      },
      //key frames su dụng
      keyframes:{
        wiggle:{
          'from':{transform:'scale(0)'},
          'to':{transform:'scale(1)'},
        },
        OpacityBackgroundBlack:{
          'from':{opacity:'0'},
          'to':{opacity:'1'},
        },
        Hwiggle:{
          'from':{transform:'scale(1)'},
          'to':{transform:'scale(0)'},
        },
        //key farm sử dụng

      
        SupportSource:{
          'from':{marginBottom:'-100%'},
          'to':{marginBottom:'0%'},
        },

        scrollLoginLogUp:{
          'from':{top:'100%'},
          'to':{top:'50%'},
        },
        // start bgHidden
        bgHidden_Start:{
          'from':{  backgroundColor:0,
            opacity:0
          },
          'to':{backgroundColor:'#00000079',
          opacity:1
        },
        },
        // end bgHidden
        bgHiddenEnd:{
          'from':{  backgroundColor:'#00000079',
            opacity:1
          },
          'to':{backgroundColor:0,
          opacity:0
        },
        }

      },
      content:{
        'link':'url("src/svg/heart_item.svg")'
      }
  
    }
  },
  plugins: [],
}
