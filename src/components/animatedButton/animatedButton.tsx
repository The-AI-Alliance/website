import classNames from 'classnames';
import { motion } from 'framer-motion';
import { FC, ReactNode, useMemo } from 'react';
import { Button } from '@carbon/react';

import styles from './animatedButton.module.scss';

type AnimatedButtonProps = {
  animationDelay?: number;
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
  onClick: () => void;
};

const AnimatedButton: FC<AnimatedButtonProps> = ({
  animationDelay = 0,
  children,
  className,
  icon,
  onClick,
}) => {
  const variants = useMemo(
    () => ({
      button: {
        initial: { opacity: 0, top: 3 },
        whileInView: {
          opacity: 1,
          top: 0,
          transition: { delay: animationDelay + 0.3, duration: 0.5 },
        },
        viewport: { once: true, amount: 0.8 },
      },

      buttonBackground: {
        initial: { opacity: 0, width: '48px' },
        whileInView: {
          opacity: 1,
          width: '100%',
          transition: {
            opacity: {
              delay: animationDelay,
              duration: 0.5,
            },
            width: {
              delay: animationDelay,
              duration: 0.5,
              ease: 'easeInOut',
            },
          },
        },
        viewport: { once: true, amount: 0.8 },
      },
    }),
    [animationDelay],
  );

  return (
    <div className={classNames(styles.animatedButton, className)}>
      <motion.div
        className={styles.animatedButton__background}
        {...variants.buttonBackground}
      ></motion.div>
      <motion.div
        className={styles.animatedButton__button}
        {...variants.button}
      >
        <Button onClick={onClick}>
          <label>{children}</label> {icon ? icon : null}
        </Button>
      </motion.div>
    </div>
  );
};

export default AnimatedButton;
