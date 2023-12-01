import { FC, RefObject } from 'react';
import Shape2 from '@graphics/shape2.svg';
import Shape3 from '@graphics/shape3.svg';
import Shape4 from '@graphics/shape4.svg';
import { Column, Grid, Heading, Section } from '@carbon/react';
import classnames from 'classnames';
import { MotionProps, motion } from 'framer-motion';
import { showInView } from '@utils/showInView';
import { ArrowRight } from '@carbon/icons-react';
import AnimatedButton from '@components/animatedButton/animatedButton';

import styles from './mission.module.scss';

type MissionProps = {
  onLearnMore: () => void;
  onViewportEnter: MotionProps['onViewportEnter'];
  sectionRef?: RefObject<HTMLDivElement>;
  shape1ref?: RefObject<HTMLDivElement>;
  shape2ref?: RefObject<HTMLDivElement>;
  shape3ref?: RefObject<HTMLDivElement>;
};

const Mission: FC<MissionProps> = ({
  onLearnMore,
  onViewportEnter,
  sectionRef,
  shape1ref,
  shape2ref,
  shape3ref,
}) => {
  const graphicsLeftProps = {
    className: classnames(styles.contentRow, styles.contentRow__graphics),
    xlg: { span: 8, offset: 1 },
    lg: 9,
    md: 4,
    sm: 1,
  };

  const graphicsRightProps = {
    className: classnames(styles.contentRow, styles.contentRow__graphics),
    lg: { span: 8, offset: 8 },
    md: { span: 4, offset: 4 },
    sm: 1,
  };

  const textLeftProps = {
    className: classnames(styles.contentRow, styles.contentRow__text),
    xlg: { span: 5, offset: 1 },
    lg: 6,
    md: 4,
    sm: 3,
  };

  const textRightProps = {
    className: classnames(styles.contentRow, styles.contentRow__text),
    xlg: { span: 5, offset: 10 },
    lg: { span: 6, offset: 9 },
    md: { span: 4, offset: 4 },
    sm: { span: 3, offset: 1 },
  };

  return (
    <Section className={styles.mission} ref={sectionRef} level={1}>
      <motion.div onViewportEnter={onViewportEnter}>
        <Grid className={styles.mission__grid}>
          <Column xlg={{ span: 7, offset: 1 }} lg={7} md={6} sm={4}>
            <Heading>Our mission</Heading>
          </Column>
          <Column
            className={classnames(styles.contentRow, styles.contentRow__text)}
            xlg={{ span: 7, offset: 8 }}
            lg={8}
            md={6}
            sm={4}
          >
            <motion.p {...showInView}>
              The AI Alliance is focused on accelerating and disseminating open
              innovation across the AI technology landscape to improve
              foundational capabilities, safety, security and trust in AI, and
              to responsibly maximize benefits to people and society everywhere.
            </motion.p>
            <motion.p {...showInView}>
              The AI Alliance brings together a critical mass of compute, data,
              tools, and talent to accelerate open innovation in AI.
            </motion.p>
            <motion.p {...showInView}>The AI Alliance seeks to:</motion.p>
          </Column>

          <Column {...graphicsLeftProps}>
            <div ref={shape1ref}>
              <Shape2 className={styles.shape} />
            </div>
          </Column>
          <Column {...textRightProps}>
            <motion.p {...showInView}>
              <strong>Build</strong> and support open technologies across
              software, models and tools.
            </motion.p>
          </Column>

          <Column {...textLeftProps} data-viewport="large">
            <motion.p {...showInView}>
              <strong>Enable</strong> developers and scientists to understand,
              experiment, and adopt open technologies.
            </motion.p>
          </Column>
          <Column {...graphicsRightProps}>
            <div ref={shape2ref}>
              <Shape3 className={styles.shape} />
            </div>
          </Column>
          <Column {...textRightProps} data-viewport="small">
            <motion.p {...showInView}>
              <strong>Enable</strong> developers and scientists to understand,
              experiment, and adopt open technologies.
            </motion.p>
          </Column>

          <Column {...graphicsLeftProps}>
            <div ref={shape3ref}>
              <Shape4 className={styles.shape} />
            </div>
          </Column>
          <Column {...textRightProps}>
            <motion.p {...showInView}>
              <strong>Advocate</strong> for open innovation with organizational
              and societal leaders, policy and regulatory bodies, and the
              public.
            </motion.p>
            <motion.div {...showInView} data-viewport="large">
              <AnimatedButton
                onClick={onLearnMore}
                className={styles.cta}
                icon={<ArrowRight />}
              >
                Learn more
              </AnimatedButton>
            </motion.div>
          </Column>
          <Column sm={4} data-viewport="small">
            <motion.div
              {...showInView}
              className={styles.smallScreenCtaWrapper}
            >
              <AnimatedButton
                onClick={onLearnMore}
                className={styles.cta}
                icon={<ArrowRight />}
              >
                Learn more
              </AnimatedButton>
            </motion.div>
          </Column>
        </Grid>
      </motion.div>
    </Section>
  );
};

export default Mission;
