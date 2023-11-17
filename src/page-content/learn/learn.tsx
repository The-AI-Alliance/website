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
              The Alliance is a global partnership among leading commercial and
              research organizations with a critical mass of talent and
              resources to accelerate open innovation in AI and its safe,
              secure, trusted adoption.​
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
              <strong>Build</strong> and advance open technologies for AI,
              including software frameworks, foundation models, and tooling to
              ensure safe deployment.
            </motion.p>
          </Column>
        </>

        <>
          <Column {...textLeftProps} data-view="inverted">
            <motion.p {...showInView}>
              <strong>Enable</strong> developers and organizations to harness
              the capability of open technologies through advocacy, education
              and skills development, demonstrations and community support.​
            </motion.p>
          </Column>
          <Column {...graphicsRightProps}>
            <div ref={shape2ref}>
              <Shape3 className={styles.shape} />
            </div>
          </Column>
          <Column {...textRightProps} data-view="normal">
            <motion.p {...showInView}>
              <strong>Enable</strong> developers and organizations to harness
              the capability of open technologies through advocacy, education
              and skills development, demonstrations and community support.​
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
              <strong>Advocate</strong> for the importance of an open technology
              ecosystem in AI to enable broad benefit and foster trust and
              safety with organizational and societal leaders, policy and
              regulatory bodies, and the public.​
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
              Open innovation in AI is essential
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
              It is a pivotal time in AI. Foundation models and generative AI
              are introducing, almost daily, opportunities that can improve how
              we work, live and interact with one another. This incredible
              progress is possible because of decades of open innovation: the
              collaboration among communities of developers, scientists,
              academics, and business leaders to build, validate, and adopt the
              latest AI technologies that advance business and society.
            </motion.p>
            <motion.p {...showInView} custom={1}>
              This open ecosystem has also been a catalyst for ensuring: trust,
              ethics, resiliency and responsibility are at the core of AI
              development and use. As AI advances, so must our ability to
              improve governance and safety – and this can only be done through
              the collective power of an open, healthy AI community that
              promotes the exchange of ideas and collaboration on decisions and
              outputs.​
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
              Meeting the challenges of open innovation​
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
              Recently, the large amount of computational and data resources
              required to build foundation models; scarcity of scientific and
              engineering talent; the need to ensure AI is useful and trusted;
              and amplified concerns around the risks of AI have threatened to
              relegate AI innovation to a small number of companies with a
              closed, proprietary vision for the AI industry.
            </motion.p>
            <motion.p {...showInView} custom={1}>
              The AI Alliance members are coming together to address these
              bottlenecks and accelerate and disseminate open innovation across
              the AI technology landscape to improve capabilities and
              responsibly benefit society.​
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
                <p>The AI Alliance Agenda</p>
                <p>
                  The Alliance will bring together a critical mass of compute,
                  data, tools, and talent to accelerate open innovation in AI by
                  starting or enhancing projects that:​
                </p>
              </Column>
              <Column xlg={{ span: 7, offset: 1 }} lg={7} md={4} sm={4}>
                <ul>
                  <motion.li {...showInView}>
                    Foster a vibrant AI hardware accelerator ecosystem by
                    boosting contributions and adoption of essential enabling
                    software technology​
                  </motion.li>
                  <motion.li {...showInView} custom={1}>
                    Build and advance the most efficient and capable software
                    frameworks and tools to enable AI model builders and GenAI
                    application developers
                  </motion.li>
                  <motion.li {...showInView} custom={2}>
                    Enable an ecosystem of open foundation models with diverse
                    modalities, including highly capable multilingual,
                    multi-modal, and science models.
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
                  <motion.li {...showInView} custom={3}>
                    Create testing, validation and benchmarking tools and
                    methodologies to ensure safe, secure, trusted and ethical AI
                  </motion.li>
                  <motion.li {...showInView} custom={4}>
                    Support global AI skills building, education, and
                    exploratory research.
                  </motion.li>
                  <motion.li {...showInView} custom={5}>
                    Advocate for regulatory policies that create a healthy open
                    AI ecosystem
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
