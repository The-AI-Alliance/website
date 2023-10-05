const inViewVariants = {
  hidden: { opacity: 0, top: 10 },
  shown: (i: number = 0) => ({
    opacity: 1,
    top: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
    },
  }),
};

export const showInView = {
  variants: inViewVariants,
  initial: 'hidden',
  whileInView: 'shown',
  viewport: { once: true, amount: 0.8 },
};
