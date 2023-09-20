import classnames from 'classnames';
import styles from './learn.module.scss';
import { RefObject } from 'react';
import { Breakpoint } from '@utils/useBreakpoint';

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

export const graphicsLeftProps = {
  className: classnames(styles.contentRow, styles.contentRow__graphics),
  xlg: { span: 8, offset: 1 },
  lg: 9,
  sm: 4,
};

export const graphicsRightProps = {
  className: classnames(styles.contentRow, styles.contentRow__graphics),
  lg: { span: 8, offset: 8 },
  md: { span: 4, offset: 4 },
  sm: 4,
};

export const textLeftProps = {
  className: classnames(styles.contentRow, styles.contentRow__text),
  xlg: { span: 5, offset: 1 },
  lg: 6,
  sm: 4,
};

export const textRightProps = {
  className: classnames(styles.contentRow, styles.contentRow__text),
  xlg: { span: 5, offset: 10 },
  lg: { span: 6, offset: 9 },
  md: { span: 4, offset: 4 },
  sm: 4,
};

export type ShapeStops = {
  stops: number[];
  top: number[];
  left: number[];
  size: number[];
};

const getMiddleStop = (rect: DOMRect, viewportHeight: number) => {
  const center = window.scrollY + rect.top + rect.height / 2;
  return Math.round((center - viewportHeight / 2) * 2) / 2;
};

export const getShape1Stops = (
  ref: RefObject<HTMLDivElement>,
): ShapeStops | null => {
  if (!ref.current) {
    return null;
  }

  const sizeFactor = 0.25;
  const xFactor = 0.25;
  const yFactor = 0.497;

  const viewportHeight = window.innerHeight;
  const rect = ref.current.getBoundingClientRect();

  const middle = getMiddleStop(rect, viewportHeight);
  const top = viewportHeight / 2 - rect.height * yFactor;
  const left1 = rect.left + rect.width * xFactor;

  const stop2 = middle + (rect.height / 4) * 3;
  const left2 = rect.left + rect.width;

  const size = rect.width * sizeFactor;

  return {
    stops: [middle, stop2],
    top: [top, top],
    left: [left1, left2],
    size: [size, size],
  };
};

export const getShape2Stops = (
  ref: RefObject<HTMLDivElement>,
): ShapeStops | null => {
  if (!ref.current) {
    return null;
  }

  const sizeFactor = 0.25;
  const xFactor = 0;
  const yFactor = 0.497;

  const viewportHeight = window.innerHeight;
  const rect = ref.current.getBoundingClientRect();

  return {
    stops: [getMiddleStop(rect, viewportHeight)],
    top: [viewportHeight / 2 - rect.height * yFactor],
    left: [rect.left + rect.width * xFactor],
    size: [rect.width * sizeFactor],
  };
};

export const getShape3Stops = (
  ref: RefObject<HTMLDivElement>,
): ShapeStops | null => {
  if (!ref.current) {
    return null;
  }

  const sizeFactor = 0.25;
  const xFactor1 = 0.25;
  const xFactor2 = 0.75;

  const viewportHeight = window.innerHeight;
  const rect = ref.current.getBoundingClientRect();

  const middleStop = getMiddleStop(rect, viewportHeight);
  const topStop = middleStop - rect.height / 2;
  const bottomStop = middleStop + rect.height / 4;
  const leaveStop = middleStop + rect.height / 2;

  const top = viewportHeight / 2;

  const left1 = rect.left + rect.width * xFactor1;
  const left2 = rect.left + rect.width * xFactor2;
  const left3 = rect.left + rect.width;
  const left4 = rect.left + rect.width * xFactor2;

  const size = rect.width * sizeFactor;

  return {
    stops: [topStop, middleStop, bottomStop, leaveStop],
    top: [top, top, top, top],
    left: [left1, left2, left3, left4],
    size: [size, size, size, size],
  };
};

export const getShape4Stops = (
  ref: RefObject<HTMLDivElement>,
  breakpoint?: Breakpoint,
): ShapeStops | null => {
  if (!ref.current || !breakpoint) {
    return null;
  }

  const sizeFactor: Record<Breakpoint, number> = {
    [Breakpoint.MAX]: 0.285,
    [Breakpoint.XLG]: 0.285,
    [Breakpoint.LG]: 0.301,
    [Breakpoint.MD]: 0.25,
    [Breakpoint.SM]: 0,
  };

  const xFactor: Record<Breakpoint, number> = {
    [Breakpoint.MAX]: -0.041,
    [Breakpoint.XLG]: -0.041,
    [Breakpoint.LG]: 0.1,
    [Breakpoint.MD]: 0.25,
    [Breakpoint.SM]: 0,
  };

  const yFactor: Record<Breakpoint, number> = {
    [Breakpoint.MAX]: 0.005,
    [Breakpoint.XLG]: 0.005,
    [Breakpoint.LG]: 0,
    [Breakpoint.MD]: 0,
    [Breakpoint.SM]: 0,
  };

  const rect = ref.current.getBoundingClientRect();

  return {
    stops: [window.document.body.scrollHeight - window.innerHeight],
    top: [window.innerHeight - rect.height + rect.height * yFactor[breakpoint]],
    left: [rect.left + rect.width * xFactor[breakpoint]],
    size: [rect.width * sizeFactor[breakpoint]],
  };
};

export const getSectionStops = (
  ref: RefObject<HTMLDivElement>,
  previousBallSizes: number[] | undefined,
): ShapeStops | null => {
  if (!ref.current) {
    return null;
  }

  const viewportHeight = window.innerHeight;
  const rect = ref.current.getBoundingClientRect();
  const previousSize = previousBallSizes?.[previousBallSizes?.length - 1];

  return {
    stops: [getMiddleStop(rect, viewportHeight)],
    top: [viewportHeight / 2],
    left: [-60],
    size: [previousSize || 120],
  };
};
