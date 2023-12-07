import { RefObject } from 'react';
import { EasingFunction, circOut, cubicBezier, easeInOut } from 'framer-motion';

export type ShapeStops = {
  stops: number[];
  top: number[];
  left: number[];
  size: number[];
  easings: EasingFunction[];
};

const getMiddleStop = (rect: DOMRect, viewportHeight: number) => {
  const center = window.scrollY + rect.top + rect.height / 2;
  return Math.round(center - (viewportHeight / 3) * 2);
};

const getShape1Stops = (ref: RefObject<HTMLDivElement>): ShapeStops | null => {
  if (!ref.current) {
    return null;
  }

  const sizeFactor = 0.251;

  const viewportHeight = window.innerHeight;
  const rect = ref.current.getBoundingClientRect();
  const size = rect.width * sizeFactor;

  const rtop = rect.top + window.scrollY;

  const middle = getMiddleStop(rect, viewportHeight);
  const left1 = rect.left + rect.width * 0.75;

  const stop2 = (rect.height / 4) * 3;
  const left2 = rect.left + rect.width;

  return {
    stops: [0, middle, middle + stop2],
    top: [rtop, rtop, rtop + stop2],
    left: [left1, left1, left2],
    size: [size, size, size],
    easings: [
      v => v, // track shape - no easing
      cubicBezier(0, 2, 0.58, 1), // to stop 2
      easeInOut, // to shape 2
    ],
  };
};

const getShape2Stops = (ref: RefObject<HTMLDivElement>): ShapeStops | null => {
  if (!ref.current) {
    return null;
  }

  const sizeFactor = 0.25;

  const viewportHeight = window.innerHeight;
  const rect = ref.current.getBoundingClientRect();
  const middle = getMiddleStop(rect, viewportHeight);
  const size = rect.width * sizeFactor;

  const stop4 = (rect.height / 4) * 3;
  const left4 = rect.left - rect.width * 0.25;

  const rtop = rect.top + window.scrollY;

  return {
    stops: [middle, middle + stop4],
    top: [rtop, rtop + stop4],
    left: [rect.left, left4],
    size: [size, size],
    easings: [
      cubicBezier(0.1, 2, 0.35, 0.79), // to stop 1
      easeInOut,
    ],
  };
};

const getShape3Stops = (ref: RefObject<HTMLDivElement>): ShapeStops | null => {
  if (!ref.current) {
    return null;
  }

  const sizeFactor = 0.25;

  const viewportHeight = window.outerHeight;
  const rect = ref.current.getBoundingClientRect();
  const size = rect.width * sizeFactor;

  const middle = getMiddleStop(rect, viewportHeight);
  const left1 = rect.left + rect.width * 0.25;

  const stop2 = rect.height / 4;
  const left2 = rect.left + rect.width * 0.5;

  const stop3 = rect.height / 2;
  const left3 = rect.left + rect.width * 0.75;

  const leave1Stop = (rect.height / 4) * 3.2;
  const left5 = rect.left + rect.width * 1.2;

  const leave2Stop = (rect.height / 4) * 7;
  const left6 = window.outerWidth + 2 * size;

  const rtop = rect.top + window.scrollY;

  return {
    stops: [
      middle,
      middle + stop2,
      middle + stop3,
      middle + leave1Stop,
      middle + leave2Stop,
    ],
    top: [
      rtop,
      rtop + stop2,
      rtop + stop3,
      rtop + leave1Stop,
      rtop + leave2Stop,
    ],
    left: [left1, left2, left3, left5, left6],
    size: [size, size, size, size, size],
    easings: [
      circOut, // to stop 2
      circOut, // to stop 3
      circOut, // to stop 4
      easeInOut, // below shape
      easeInOut, // out of the screen
    ],
  };
};

export const headerAnimations = {
  text: {
    initial: {
      opacity: 0,
      top: 20,
    },
    animate: {
      opacity: 1,
      top: 0,
      transition: {
        top: {
          duration: 1,
          ease: 'easeOut',
        },
        opacity: {
          delay: 0.3,
          duration: 1,
        },
      },
    },
  },

  title: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.1 } },
  },

  shape: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.1 } },
  },
};

export const calculateAnimationStops = (
  shape1ref: RefObject<HTMLDivElement>,
  shape2ref: RefObject<HTMLDivElement>,
  shape3ref: RefObject<HTMLDivElement>,
) => {
  const shape1stops = getShape1Stops(shape1ref);
  const shape2stops = getShape2Stops(shape2ref);
  const shape3stops = getShape3Stops(shape3ref);

  if (!shape1stops || !shape2stops || !shape3stops) {
    return null;
  }

  return {
    stopPoints: [
      ...shape1stops.stops,
      ...shape2stops.stops,
      ...shape3stops.stops,
    ],
    sizes: [...shape1stops.size, ...shape2stops.size, ...shape3stops.size],
    xCoordinates: [
      ...shape1stops.left,
      ...shape2stops.left,
      ...shape3stops.left,
    ],
    yCoordinates: [...shape1stops.top, ...shape2stops.top, ...shape3stops.top],
    easings: [
      ...shape1stops.easings,
      ...shape2stops.easings,
      ...shape3stops.easings,
    ],
  };
};
