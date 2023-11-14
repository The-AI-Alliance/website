import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import classnames from 'classnames';
import { Column, Grid, Heading } from '@carbon/react';
import Shape2 from '@graphics/shape2.svg';
import Shape3 from '@graphics/shape3.svg';
import Shape4 from '@graphics/shape4.svg';
import ContactPanel from '../contact/contactPanel';
import { EasingFunction, backInOut, motion } from 'framer-motion';
import { ROUTE } from '@utils/useNavigation';
import useResize from '@utils/useResize';
import AnimatedBall from '@components/ball/animatedBall';
import {
  graphicsLeftProps,
  textRightProps,
  graphicsRightProps,
  textLeftProps,
  getShape1Stops,
  getShape3Stops,
  getShape2Stops,
  getShape4Stops,
  getSectionStops,
} from './animations';
import useBreakpoint from '@utils/useBreakpoint';
import { showInView } from '@utils/showInView';

import styles from './learn.module.scss';

const DEBUG_ANIMATIONS = false;

const LearnMorePage: React.FC<{ previousRoute: ROUTE | null }> = ({
  previousRoute,
}) => {
  const breakpoint = useBreakpoint();
  const shape1ref = useRef<HTMLDivElement>(null);
  const shape2ref = useRef<HTMLDivElement>(null);
  const shape3ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const shape4ref = useRef<HTMLDivElement>(null);

  const [ballPosition, setBallPosition] = useState<{
    sizes: number[];
    stopPoints: number[];
    xCoordinates: number[];
    yCoordinates: number[];
    easings: EasingFunction[];
  } | null>(null);

  const mainContentVariants = useMemo(
    () => ({
      hide: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { delay: previousRoute === ROUTE.HOME ? 1.7 : 0.35 },
      },
      unmount: { opacity: 0, transition: { duration: 0.35 } },
    }),
    [previousRoute],
  );

  const renderBreakpoints = useCallback(
    () =>
      ballPosition?.stopPoints?.map((scroll, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            width: 3,
            height: 3,
            backgroundColor: 'red',
            top:
              scroll +
              ballPosition.yCoordinates[idx] -
              1 +
              ballPosition.sizes[idx] / 2,
            left:
              ballPosition.xCoordinates[idx] - 1 + ballPosition.sizes[idx] / 2,
          }}
        ></div>
      )),
    [ballPosition],
  );

  const calculateAnimationStops = useCallback(() => {
    const shape1stops = getShape1Stops(shape1ref);
    const shape2stops = getShape2Stops(shape2ref);
    const shape3stops = getShape3Stops(shape3ref);
    const sectionStops = getSectionStops(
      sectionRef,
      shape3stops?.size,
      breakpoint,
    );
    const shape4stops = getShape4Stops(shape4ref, breakpoint);

    if (
      !shape1stops ||
      !shape2stops ||
      !shape3stops ||
      !sectionStops ||
      !shape4stops
    ) {
      setBallPosition(null);
      return;
    }

    setBallPosition({
      stopPoints: [
        0,
        ...shape1stops.stops,
        ...shape2stops.stops,
        ...shape3stops.stops,
        ...sectionStops.stops,
        ...shape4stops.stops,
      ],
      sizes: [
        shape1stops.size[0],
        ...shape1stops.size,
        ...shape2stops.size,
        ...shape3stops.size,
        ...sectionStops.size,
        ...shape4stops.size,
      ],
      xCoordinates: [
        window.innerWidth / 2 - shape1stops.size[0],
        ...shape1stops.left,
        ...shape2stops.left,
        ...shape3stops.left,
        ...sectionStops.left,
        ...shape4stops.left,
      ],
      yCoordinates: [
        -shape1stops.size[0],
        ...shape1stops.top,
        ...shape2stops.top,
        ...shape3stops.top,
        ...sectionStops.top,
        ...shape4stops.top,
      ],
      easings: [
        ...shape1stops.easings,
        ...shape2stops.easings,
        ...shape3stops.easings,
        ...sectionStops.easings,
        ...shape4stops.easings,
      ],
    });
  }, [breakpoint]);

  useResize(calculateAnimationStops);
  useEffect(calculateAnimationStops, [calculateAnimationStops]);

  const onContentAnimationComplete = useCallback(
    (variantName: string) => {
      if (variantName === 'show') {
        calculateAnimationStops();
      }
    },
    [calculateAnimationStops],
  );

  return (
    <motion.div
      variants={mainContentVariants}
      initial="hide"
      animate="show"
      exit="unmount"
      onAnimationComplete={onContentAnimationComplete}
    >
      {DEBUG_ANIMATIONS ? renderBreakpoints() : null}
      {ballPosition ? (
        <AnimatedBall
          xStopCoordinates={ballPosition.xCoordinates}
          yStopCoordinates={ballPosition.yCoordinates}
          stopPoints={ballPosition.stopPoints}
          ballSizes={ballPosition.sizes}
          easeX={ballPosition.easings}
          easeY={[backInOut]}
        />
      ) : null}
      <Grid className={styles.learnMore}>
        <>
          <Column
            className={classnames(styles.firstRow, styles.pageHeading)}
            xlg={{ span: 7, offset: 1 }}
            lg={7}
            md={4}
            sm={4}
          >
            <Heading className={styles.heading}>
              About the
              <br />
              AI Alliance
            </Heading>
          </Column>
          <Column
            className={styles.firstRow}
            xlg={{ span: 8, offset: 8 }}
            lg={{ span: 9, offset: 7 }}
            md={6}
            sm={4}
          >
            <motion.p {...showInView}>
              The AI Alliance is a collaboration of leading global industry and
              research organizations.
            </motion.p>
            <motion.p {...showInView} custom={1}>
              Guided by flexible collaboration and minimal governance, members
              must commit to at least one aspect of the Alliance&apos;s
              three-fold mission: Build, Enable, and Advocate.
            </motion.p>
          </Column>
        </>

        <>
          <Column {...graphicsLeftProps}>
            <div ref={shape1ref}>
              <Shape2 className={styles.shape} />
            </div>
          </Column>
          <Column {...textRightProps}>
            <motion.p {...showInView}>
              <strong>Build</strong> and release open technology including AI
              models and tooling, especially in language, code, image, video and
              in domains and modalities essential to the health, sustainability,
              and prosperity of society.
            </motion.p>
          </Column>
        </>

        <>
          <Column {...textLeftProps} data-view="inverted">
            <motion.p {...showInView}>
              <strong>Enable</strong> developer and organizational use and
              adoption of open technology including with advocacy, events,
              community support, education and training, and use case
              demonstrations.
            </motion.p>
          </Column>
          <Column {...graphicsRightProps}>
            <div ref={shape2ref}>
              <Shape3 className={styles.shape} />
            </div>
          </Column>
          <Column {...textRightProps} data-view="normal">
            <motion.p {...showInView}>
              <strong>Enable</strong> developer and organizational use and
              adoption of open technology including with advocacy, events,
              community support, education and training, and use case
              demonstrations.
            </motion.p>
          </Column>
        </>

        <>
          <Column {...graphicsLeftProps}>
            <div ref={shape3ref}>
              <Shape4 className={styles.shape} />
            </div>
          </Column>
          <Column {...textRightProps}>
            <motion.p {...showInView}>
              <strong>Advocate</strong> for a vibrant open technology ecosystem
              in AI to enable broad benefit, address challenges, and foster
              trust and safety with organizational and societal leaders, policy
              and regulatory bodies, and the public.
            </motion.p>
          </Column>
        </>

        <>
          <Column
            className={styles.contentRow}
            xlg={{ span: 7, offset: 1 }}
            lg={7}
            md={5}
            sm={4}
          >
            <Heading className={styles.subheading}>Why open source?</Heading>
          </Column>
          <Column
            className={styles.contentRow}
            xlg={{ span: 8, offset: 8 }}
            lg={{ span: 9, offset: 7 }}
            md={6}
            sm={4}
          >
            <motion.p {...showInView}>
              The promise of AI is best realized through the transparency,
              safety, and trust inherent in open-source approaches. Open-source
              AI development allows a diverse community to innovate and validate
              models together, helping find — and address — potential risks,
              downsides, and vulnerabilities before such models are released at
              scale.
            </motion.p>
          </Column>
        </>

        <>
          <Column
            className={styles.contentRow}
            xlg={{ span: 7, offset: 1 }}
            lg={7}
            md={5}
            sm={4}
          >
            <Heading className={styles.subheading}>
              What is open-source AI?
            </Heading>
          </Column>
          <Column
            className={styles.contentRow}
            xlg={{ span: 8, offset: 8 }}
            lg={{ span: 9, offset: 7 }}
            md={6}
            sm={4}
          >
            <motion.p {...showInView}>
              AI is built on models. Therefore, open-source AI starts with
              open-source models. Such models are transparent, accessible and
              have permissive licenses. These principles extend to all related
              artifacts, including model documentation, architecture, and
              weights and biases.
            </motion.p>
          </Column>
        </>

        <Column className={styles.contentRow} xlg={16} lg={16} md={8} sm={4}>
          <div ref={sectionRef}>
            <Grid className={styles.subGrid}>
              <Column
                className={styles.subheading}
                xlg={{ span: 15, offset: 1 }}
                lg={16}
                md={8}
                sm={4}
              >
                <p>In particular, this means:</p>
              </Column>
              <Column xlg={{ span: 7, offset: 1 }} lg={7} md={4} sm={4}>
                <ul>
                  <motion.li {...showInView}>
                    Transparency concerning organizations and individuals
                    involved in creating, contributing to, and maintaining the
                    models
                  </motion.li>
                  <motion.li {...showInView} custom={1}>
                    A standard, self-serve license with terms and conditions
                    amenable to broad, permissive use and adaptation, without
                    onerous terms, notifications, use limits and non-competition
                    limits for users
                  </motion.li>
                </ul>
              </Column>
              <Column
                xlg={{ span: 7, offset: 8 }}
                lg={{ span: 7, offset: 7 }}
                md={{ span: 4, offset: 4 }}
                sm={4}
              >
                <ul>
                  <motion.li {...showInView} custom={2}>
                    Transparency in model training and tuning methods
                  </motion.li>
                  <motion.li {...showInView} custom={3}>
                    Full release of model architecture and trained parameter
                    weights and biases
                  </motion.li>
                  <motion.li {...showInView} custom={4}>
                    Accessibility through an open, self-serve repository that
                    includes everything needed to understand, modify, build on
                    and deploy a model into applications
                  </motion.li>
                </ul>
              </Column>
            </Grid>
          </div>
        </Column>

        <ContactPanel
          className={styles.contactPanel}
          background="straight"
          graphicsRef={shape4ref}
        />
      </Grid>
    </motion.div>
  );
};

export default LearnMorePage;
