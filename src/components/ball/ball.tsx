import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import classnames from 'classnames';

import styles from './ball.module.scss';

const Ball: React.FC<HTMLMotionProps<'div'>> = ({ className, ...props }) => {
  return (
    <motion.div
      className={classnames(styles.ball, className)}
      {...props}
    ></motion.div>
  );
};

export default Ball;
