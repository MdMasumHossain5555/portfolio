export const bottomVariant = {
  hidden: {
    opacity: 0,
    y: 80,
    },
    visible: (d) => ({
    opacity: 1,
    y: 0,
    transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: d,
    },
  }),
}