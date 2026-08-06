export const fadeUp = {
    hidden:{
        opacity:0,
        y:40
    },

    visible:{
        opacity:1,
        y:0,

        transition:{
            duration:.7,
            ease:"easeOut"
        }
    }
}

export const slideDown = {
    hidden:{
        opacity:0,
        y:-60
    },

    visible:{
        opacity:1,
        y:0,

        transition:{
            duration:.6
        }
    }
}

export const scaleImage = {
    hidden:{
        opacity:0,
        scale:.7
    },

    visible:{
        opacity:1,
        scale:1,

        transition:{
            duration:.8
        }
    }
}
export const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};