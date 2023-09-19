const inViewVariants = {
  hidden: { opacity: 0 },
  shown: (i: number = 0) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};

export const showInView = {
  variants: inViewVariants,
  initial: 'hidden',
  whileInView: 'shown',
  viewport: { once: true, amount: 0.8 },
};
