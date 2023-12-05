import { FC } from 'react';
import {
  EasingFunction,
  HTMLMotionProps,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import classnames from 'classnames';

import styles from './ball.module.scss';

const AnimatedBall: FC<
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
  const easedScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const top = useTransform(easedScrollY, stopPoints, yStopCoordinates);

  const left = useTransform(
    easedScrollY,
    stopPoints,
    xStopCoordinates,
    easeX ? { ease: easeX } : undefined,
  );
  const size = useTransform(
    easedScrollY,
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
