export const menu = {
  hidden: {
    opacity: 0,
    y: -15,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: "easeOut" as const,
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: {
      duration: 0.2,
    },
  },
};

export const item = {
  hidden: {
    opacity: 0,
    x: 15,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
    },
  },
};