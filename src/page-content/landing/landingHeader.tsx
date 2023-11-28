import { FC, RefObject } from 'react';
import ShapeTop from '@graphics/shape2b.svg';
import ShapeBottom from '@graphics/shape1c.svg';
import { Column, Grid, Heading, Section } from '@carbon/react';
import { motion } from 'framer-motion';
import { ArrowDown } from '@carbon/icons-react';
import { headerAnimations } from './animations';
import AnimatedButton from '@components/animatedButton/animatedButton';

import styles from './landingHeader.module.scss';

type LandingHeaderProps = {
  shape1ref?: RefObject<HTMLDivElement>;
  shape2ref?: RefObject<HTMLDivElement>;
  onLearnMore: () => void;
};

const LandingHeader: FC<LandingHeaderProps> = ({
  onLearnMore,
  shape1ref,
  shape2ref,
}) => {
  return (
    <Grid>
      <div className={styles.background}>
        <motion.div
          className={styles.shapeTop}
          ref={shape1ref}
          {...headerAnimations.shape}
        >
          <ShapeTop />
        </motion.div>
        <motion.div
          className={styles.shapeBottom}
          ref={shape2ref}
          {...headerAnimations.shape}
        >
          <ShapeBottom />
        </motion.div>
      </div>
      <Column className={styles.content}>
        <Section level={1}>
          <motion.div {...headerAnimations.title}>
            <Heading className={styles.content__header}>
              The AI Alliance
            </Heading>
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
};

export default LandingHeader;
