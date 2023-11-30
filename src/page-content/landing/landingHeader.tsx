import { FC } from 'react';
import ShapeTop from '@graphics/shape2b.svg';
import ShapeBottom from '@graphics/shape1c.svg';
import { Column, Grid, Heading, Section } from '@carbon/react';
import { motion } from 'framer-motion';
import { ArrowDown } from '@carbon/icons-react';
import { headerAnimations } from './animations';
import AnimatedButton from '@components/animatedButton/animatedButton';
import Ball from '@components/ball/ball';

import styles from './landingHeader.module.scss';

type LandingHeaderProps = {
  onLearnMore: () => void;
};

const LandingHeader: FC<LandingHeaderProps> = ({ onLearnMore }) => (
  <Grid>
    <div className={styles.background}>
      <Ball
        className={styles.ball}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
      />
      <motion.div className={styles.shapeTop} {...headerAnimations.shape}>
        <ShapeTop />
      </motion.div>
      <motion.div className={styles.shapeBottom} {...headerAnimations.shape}>
        <ShapeBottom />
      </motion.div>
    </div>
    <Column className={styles.content}>
      <Section level={1}>
        <motion.div {...headerAnimations.title}>
          <Heading className={styles.content__header}>The AI Alliance</Heading>
        </motion.div>
        <motion.p
          className={styles.content__subhead}
          {...headerAnimations.text}
        >
          A community of technology creators, developers and adopters
          collaborating to advance safe, responsible AI rooted in open
          innovation.
        </motion.p>
        <AnimatedButton
          animationDelay={0.5}
          className={styles.action}
          onClick={onLearnMore}
          icon={<ArrowDown />}
        >
          Learn more
        </AnimatedButton>
      </Section>
    </Column>
  </Grid>
);

export default LandingHeader;
