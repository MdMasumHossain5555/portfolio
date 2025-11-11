export const infinityCarousel = {
  hidden: {
    x: 0,
    },
    visible: {
        x: ["0%", "-50%"],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
            },
        },
    },
}   