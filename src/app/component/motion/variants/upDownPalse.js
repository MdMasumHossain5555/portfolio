export const upDownPalse = {
  hidden: {
    y: 0,
    opacity: 1,
  },
  visible: {
    y: [0, -5, 0],
    opacity: 1 ,
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
    },
  },
}