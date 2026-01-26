export const rotateClockwise = {
  hidden: { opacity: 0, rotate: 0 },
  visible: { rotate: [0, 180, 0], opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
  exit: { opacity: 0 },
};

export const rotateAntiClockwise = {
  hidden: { opacity: 0, rotate: 0 },
  visible: { rotate: [0, -180, 0], opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
  exit: { opacity: 0 },
};
