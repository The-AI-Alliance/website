import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Button, Column, Grid, Heading, Section } from '@carbon/react';
import Shape1 from '@graphics/shape1.svg';
import Shape2 from '@graphics/shape2b.svg';
import useNavigation, { ROUTE } from '../../utils/useNavigation';
import { Variant, motion } from 'framer-motion';
import useResize from '@utils/useResize';
import Ball from '@components/ball/ball';

import styles from './landing.module.scss';

const LandingPage: React.FC = () => {
  const { navigate } = useNavigation();
  const handleNextPage = useCallback(() => navigate(ROUTE.LEARN), [navigate]);
  const shape1ref = useRef<HTMLDivElement>(null);
  const shape2ref = useRef<HTMLDivElement>(null);

  const [ballPositions, setBallPositions] = useState<{
    start: Variant;
    show: Variant;
    end: Variant;
  } | null>(null);

  const calculateBallPositions = useCallback(() => {
    const sourceDim = shape1ref.current?.getBoundingClientRect();
    const destDim = shape2ref.current?.getBoundingClientRect();

    if (!sourceDim || !destDim) return;

    const sourceSize = sourceDim.width / 5.68;
    const destSize = destDim.width / 5.9;
    setBallPositions({
      start: {
        opacity: 0,
        top: sourceDim.top + sourceDim.height * 0.537,
        left: sourceDim.left + sourceDim.width * 0.662,
        width: sourceSize,
        height: sourceSize,
      },
      show: {
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 1.4,
        },
      },
      end: {
        top: destDim.top + destDim.height * 0.374,
        left: destDim.left + destDim.width * 0.205,
        width: destSize,
        height: destSize,
        opacity: 0,
        transition: {
          top: {
            delay: 0.1,
            duration: 1.5,
            ease: [0.6, 0, 0.36, 0.97],
          },
          left: {
            delay: 0.1,
            duration: 1.5,
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
          opacity: {
            delay: 1.6,
            duration: 0.1,
          },
        },
      },
    });
  }, []);

  const animation = useMemo(
    () => ({
      button: {
        initial: { opacity: 0, top: 3 },
        animate: {
          opacity: 1,
          top: 0,
          transition: { delay: 2, duration: 0.5 },
        },
        exit: { opacity: 0, top: 3, transition: { duration: 0.4 } },
      },

      buttonBackground: {
        initial: { opacity: 0, width: '48px' },
        animate: {
          opacity: 1,
          width: '100%',
          transition: {
            opacity: {
              delay: 1.3,
              duration: 1.2,
            },
            width: {
              delay: 1.5,
              duration: 0.7,
              ease: 'easeInOut',
            },
          },
        },
        exit: {
          opacity: 0,
          width: '48px',
          transition: {
            width: { delay: 0.3, duration: 0.5 },
            opacity: { delay: 0.8, duration: 0.5 },
          },
        },
      },

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
              duration: 1.5,
              ease: 'easeOut',
            },
            opacity: {
              delay: 0.5,
              duration: 1.8,
            },
          },
        },
        exit: { opacity: 0, transition: { duration: 0.7 } },
      },

      title: {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { delay: 0.1 } },
        exit: { opacity: 0, transition: { duration: 0.7 } },
      },

      shape: {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { delay: 0.1 } },
        exit: { opacity: 0, transition: { delay: 1.6, duration: 0.1 } },
      },
    }),
    [],
  );

  useResize(calculateBallPositions, () => setBallPositions(null));

  useEffect(() => {
    if (shape1ref.current && shape2ref.current) {
      calculateBallPositions();
    }
  }, [calculateBallPositions]);

  const handleExitAnimationStarted = useCallback(() => {
    calculateBallPositions();
  }, [calculateBallPositions]);

  return (
    <Grid className={styles.landingPage}>
      <div className={styles.background}>
        {ballPositions ? (
          <Ball
            onAnimationStart={handleExitAnimationStarted}
            variants={ballPositions}
            initial="start"
            animate="show"
            exit="end"
          />
        ) : null}
        <motion.div
          className={styles.shapeTop}
          ref={shape1ref}
          {...animation.shape}
        >
          <Shape2 />
        </motion.div>
        <motion.div
          className={styles.shapeBottom}
          ref={shape2ref}
          {...animation.shape}
        >
          <Shape1 />
        </motion.div>
      </div>
      <Column
        className={styles.contentWrapper}
        xlg={{ span: 7, offset: 7 }}
        lg={{ span: 7, offset: 6 }}
        md={5}
        sm={{ span: 4 }}
      >
        <Section level={1} className={styles.content}>
          <div className={styles.content__animationWrapper}>
            <motion.div {...animation.title}>
              <Heading className={styles.content__header}>
                Open Source
                <br />
                AI Alliance
              </Heading>
            </motion.div>
            <motion.p className={styles.content__subhead} {...animation.text}>
              A community of industry and research leaders committed to building
              the most capable and trusted open-source AI models.
            </motion.p>
            <div className={styles.content__actionWrapper}>
              <motion.div
                className={styles.content__actionBackground}
                {...animation.buttonBackground}
              ></motion.div>
              <motion.div
                className={styles.content__action}
                {...animation.button}
              >
                <Button onClick={handleNextPage}>Learn more</Button>
              </motion.div>
            </div>
          </div>
        </Section>
      </Column>
    </Grid>
  );
};

export default LandingPage;
