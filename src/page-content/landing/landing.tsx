import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Column, Grid, Heading, Section } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import Shape1 from '@graphics/shape1.svg';
import Shape2 from '@graphics/shape2b.svg';
import useNavigation, { ROUTE } from '../../utils/useNavigation';
import { Variants, motion } from 'framer-motion';
import BallPosition from '@type/ballPosition';
import useResize from '@utils/useResize';
import Ball from '@components/ball/ball';

import styles from './landing.module.scss';

const contentVariants: Variants = {
  exit: {
    opacity: 0,
    left: -10,
    transition: {
      opacity: {
        duration: 0.8,
      },
      left: {
        duration: 0.8,
        delay: 0.1,
        ease: 'easeInOut',
      },
    },
  },
  shown: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const LandingPage: React.FC = () => {
  const { navigate } = useNavigation();
  const handleNextPage = useCallback(() => navigate(ROUTE.LEARN), [navigate]);
  const shape1ref = useRef<HTMLDivElement>(null);
  const shape2ref = useRef<HTMLDivElement>(null);

  const [ballPositions, setBallPositions] = useState<{
    start: BallPosition;
    end: BallPosition;
  } | null>(null);

  const calculateBallPositions = useCallback(() => {
    const sourceDim = shape1ref.current?.getBoundingClientRect();
    const destDim = shape2ref.current?.getBoundingClientRect();

    if (!sourceDim || !destDim) return;

    const sourceSize = sourceDim.width / 5.65;
    const destSize = destDim.width / 5.9;
    setBallPositions({
      start: {
        top: sourceDim.top + sourceDim.height * 0.537,
        left: sourceDim.left + sourceDim.width * 0.662,
        width: sourceSize,
        height: sourceSize,
      },
      end: {
        top: destDim.top + destDim.height * 0.374,
        left: destDim.left + destDim.width * 0.205,
        width: destSize,
        height: destSize,
        transition: {
          top: {
            delay: 0.1,
            duration: 0.9,
            ease: [0.55, 0.11, 0.18, 0.97],
          },
          left: {
            delay: 0.1,
            duration: 1,
            ease: [0.8, 0, 0.56, 0.98],
          },
          width: {
            delay: 0.2,
            duration: 0.5,
          },
          height: {
            delay: 0.2,
            duration: 0.5,
          },
        },
      },
    });
  }, []);

  useResize(calculateBallPositions, () => setBallPositions(null));

  useEffect(() => {
    if (shape1ref.current && shape2ref.current) {
      calculateBallPositions();
    }
  }, [calculateBallPositions]);

  const handleExitAnimationStarted = useCallback(() => {
    calculateBallPositions();
  }, [calculateBallPositions]);

  useEffect(() => {
    return () => {
      window.document
        .getElementsByTagName('body')[0]
        ?.classList.remove('noscrollbar');
    };
  }, []);

  return (
    <Grid className={styles.landingPage}>
      <div className={styles.background}>
        {ballPositions ? (
          <Ball
            onAnimationStart={handleExitAnimationStarted}
            variants={ballPositions}
            initial="start"
            exit="end"
          />
        ) : null}
        <motion.div
          className={styles.shapeTop}
          ref={shape1ref}
          exit={
            shape1ref.current
              ? {
                  top: '-100%',
                  left: '-100%',
                  opacity: 0.4,
                  transition: {
                    delay: 0.1,
                    ease: 'easeIn',
                    duration: 1.1,
                  },
                }
              : undefined
          }
        >
          <Shape2 />
        </motion.div>
        <div className={styles.shapeBottom} ref={shape2ref}>
          <Shape1 />
        </div>
      </div>
      <Column
        className={styles.contentWrapper}
        xlg={{ span: 7, offset: 7 }}
        lg={{ span: 7, offset: 6 }}
        md={5}
        sm={{ span: 4 }}
      >
        <Section level={1} className={styles.content}>
          <motion.div
            className={styles.content__animationWrapper}
            variants={contentVariants}
            initial="hidden"
            animate="shown"
            exit="exit"
          >
            <Heading className={styles.content__header}>AI Alliance</Heading>
            <p className={styles.content__subhead}>
              A community of academic and industry leaders committed to building
              safe and trusted open-source AI models.
            </p>
            <Button
              renderIcon={() => <ArrowRight />}
              className={styles.content__action}
              onClick={handleNextPage}
            >
              Learn more
            </Button>
          </motion.div>
        </Section>
      </Column>
    </Grid>
  );
};

export default LandingPage;
