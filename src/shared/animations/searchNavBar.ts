export const searchDropdown = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.16,
      ease: "easeOut" as const,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.12,
      ease: "easeIn" as const,
    },
  },
};

export const searchItem = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};