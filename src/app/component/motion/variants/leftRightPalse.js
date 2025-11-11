export const leftRightPalse = {
  hidden: {
    x: 0,
    opacity: 1,
  },
  visible: {
    x: [ 0, 10, -10, 10, 0 ],
    opacity: 1,
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
    }
  },
}