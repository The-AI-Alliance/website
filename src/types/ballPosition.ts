import { AnimationProps } from 'framer-motion';

type BallPosition = {
  top: number;
  left: number;
  width: number;
  height: number;
  transition?: AnimationProps['transition'];
};

export default BallPosition;
