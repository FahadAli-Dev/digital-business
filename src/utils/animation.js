export const containerVariants = (delay) => ({
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    y: 1,
    transition: {
      type: "spring",
      duration: 2,
      delay: delay,
    },
  },
});

export const tagVariants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};

export const titleVariants = {
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { tyep: "spring", duration: 2.2 },
  },
};

export const desVariants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", duration: 2.6, delay: 0.2 },
  },
};
