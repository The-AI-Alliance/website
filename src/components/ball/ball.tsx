import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import classnames from 'classnames';

import styles from './ball.module.scss';

const Ball: React.FC<HTMLMotionProps<'div'> & { fixed?: boolean }> = ({
  className,
  fixed = true,
  ...props
}) => {
  return (
    <motion.div
      className={classnames(
        styles.ball,
        { [styles['ball--fixed']]: !!fixed },
        className,
      )}
      {...props}
    ></motion.div>
  );
};

export default Ball;
