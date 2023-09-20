import React from 'react';
import {
  EasingFunction,
  HTMLMotionProps,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import classnames from 'classnames';

import styles from './ball.module.scss';

const AnimatedBall: React.FC<
  HTMLMotionProps<'div'> & {
    ballSizes: number[];
    easeX?: EasingFunction | EasingFunction[];
    easeY?: EasingFunction | EasingFunction[];
    stopPoints: number[];
    xStopCoordinates: number[];
    yStopCoordinates: number[];
  }
> = ({
  ballSizes,
  className,
  easeX,
  easeY,
  stopPoints,
  style,
  xStopCoordinates,
  yStopCoordinates,
  ...props
}) => {
  const { scrollY } = useScroll();
  const top = useTransform(scrollY, stopPoints, yStopCoordinates);

  const left = useTransform(
    scrollY,
    stopPoints,
    xStopCoordinates,
    easeX ? { ease: easeX } : undefined,
  );
  const size = useTransform(
    scrollY,
    stopPoints,
    ballSizes,
    easeY ? { ease: easeY } : undefined,
  );

  return (
    <motion.div
      className={classnames(styles.ball, className)}
      style={{
        width: size,
        height: size,
        top,
        left,
        ...style,
      }}
      {...props}
    ></motion.div>
  );
};

export default AnimatedBall;
