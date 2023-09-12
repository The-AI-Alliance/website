import React from 'react';
import { AnimationLifecycles, AnimationProps, motion } from 'framer-motion';

import styles from './ball.module.scss';

const Ball: React.FC<AnimationProps & AnimationLifecycles> = ({ ...props }) => {
  return <motion.div className={styles.ball} {...props}></motion.div>;
};

export default Ball;
