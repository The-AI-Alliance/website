import classnames from 'classnames';
import styles from './learn.module.scss';
import { RefObject } from 'react';
import { Breakpoint } from '@utils/useBreakpoint';
import {
  EasingFunction,
  backOut,
  circOut,
  cubicBezier,
  easeIn,
  easeInOut,
  easeOut,
} from 'framer-motion';

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
  easings: EasingFunction[];
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

  const sizeFactor = 0.251;
  const yFactor = 0.5;

  const viewportHeight = window.innerHeight;
  const rect = ref.current.getBoundingClientRect();
  const size = rect.width * sizeFactor;

  const middle = getMiddleStop(rect, viewportHeight);
  const top = viewportHeight / 2 - rect.height * yFactor;
  const left1 = rect.left + rect.width * 0.75;

  const stop2 = middle + (rect.height / 4) * 3;
  const left2 = rect.left + rect.width;

  return {
    stops: [middle, stop2],
    top: [top, top],
    left: [left1, left2],
    size: [size, size],
    easings: [
      cubicBezier(0.8, -2, 0.2, 1), // to stop 1
      cubicBezier(0, 2, 0.58, 1), // to stop 2
    ],
  };
};

export const getShape2Stops = (
  ref: RefObject<HTMLDivElement>,
): ShapeStops | null => {
  if (!ref.current) {
    return null;
  }

  const sizeFactor = 0.25;
  const yFactor = 0.5;

  const viewportHeight = window.innerHeight;
  const rect = ref.current.getBoundingClientRect();
  const middle = getMiddleStop(rect, viewportHeight);
  const top = viewportHeight / 2 - rect.height * yFactor;
  const size = rect.width * sizeFactor;

  const stop4 = middle + (rect.height / 4) * 3;
  const left4 = rect.left - rect.width * 0.25;

  return {
    stops: [middle, stop4],
    top: [top, top],
    left: [rect.left, left4],
    size: [size, size],
    easings: [
      easeInOut,
      cubicBezier(0.1, 2, 0.35, 0.79), // to stop 1
    ],
  };
};

export const getShape3Stops = (
  ref: RefObject<HTMLDivElement>,
): ShapeStops | null => {
  if (!ref.current) {
    return null;
  }

  const sizeFactor = 0.25;
  const yFactor = 0.5;

  const viewportHeight = window.innerHeight;
  const rect = ref.current.getBoundingClientRect();
  const top = viewportHeight / 2 - rect.height * yFactor;
  const size = rect.width * sizeFactor;

  const middleStop = getMiddleStop(rect, viewportHeight);
  const left1 = rect.left + rect.width * 0.25;

  const stop2 = middleStop + rect.height / 4;
  const left2 = rect.left + rect.width * 0.5;

  const stop3 = middleStop + rect.height / 2;
  const left3 = rect.left + rect.width * 0.75;

  const bottomStop = middleStop + (rect.height / 4) * 3;
  const left4 = rect.left + rect.width;

  const leaveStop = middleStop + (rect.height / 4) * 6;
  const left5 = rect.left + rect.width * 1.1;

  return {
    stops: [middleStop, stop2, stop3, bottomStop, leaveStop],
    top: [top, top, top, top, top],
    left: [left1, left2, left3, left4, left5],
    size: [size, size, size, size, size],
    easings: [
      easeInOut, // to stop 1
      circOut, // to stop 2
      circOut, // to stop 3
      circOut, // to stop 4
      backOut, // to stop 5
    ],
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
    [Breakpoint.MAX]: 0.288,
    [Breakpoint.XLG]: 0.288,
    [Breakpoint.LG]: 0.301,
    [Breakpoint.MD]: 0.25,
    [Breakpoint.SM]: 0,
  };

  const xFactor: Record<Breakpoint, number> = {
    [Breakpoint.MAX]: -0.042,
    [Breakpoint.XLG]: -0.043,
    [Breakpoint.LG]: 0.098,
    [Breakpoint.MD]: 0.25,
    [Breakpoint.SM]: 0,
  };

  const rect = ref.current.getBoundingClientRect();

  return {
    stops: [window.document.body.scrollHeight - window.innerHeight],
    top: [window.innerHeight - rect.height],
    left: [rect.left + rect.width * xFactor[breakpoint]],
    size: [rect.width * sizeFactor[breakpoint]],
    easings: [
      // to contactForm
      easeOut,
    ],
  };
};

export const getSectionStops = (
  ref: RefObject<HTMLDivElement>,
  previousBallSizes: number[] | undefined,
  breakpoint?: Breakpoint,
): ShapeStops | null => {
  if (!ref.current) {
    return null;
  }

  const viewportHeight = window.innerHeight;
  const rect = ref.current.getBoundingClientRect();
  const previousSize = previousBallSizes?.[previousBallSizes?.length - 1];
  const left =
    breakpoint === Breakpoint.MD
      ? rect.left + rect.width * 0.5
      : rect.left + rect.width * 0.25;

  return {
    stops: [getMiddleStop(rect, viewportHeight)],
    top: [viewportHeight / 2],
    left: [left],
    size: [previousSize || 120],
    easings: [easeIn],
  };
};
