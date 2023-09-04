import React from 'react';
import { Button, Column, Grid, Heading, Section } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import Shape1 from '@graphics/shape1.svg';
import Shape2 from '@graphics/shape2b.svg';

import styles from '@styles/Landing.module.scss';

const LandingPage: React.FC = () => {
  return (
    <Grid className={styles.grid}>
      <div className={styles.background}>
        <div className={styles.shapeTop}>
          <Shape2 />
        </div>
        <div className={styles.shapeBottom}>
          <Shape1 />
        </div>
      </div>
      <Column
        className={styles.contentWrapper}
        lg={{ span: 7, offset: 6 }}
        xlg={{ span: 7, offset: 7 }}
        md={5}
        sm={{ span: 4 }}
      >
        <Section level={1} className={styles.content}>
          <Heading className={styles.content__header}>AI Alliance</Heading>
          <p className={styles.content__subhead}>
            Building the most advanced, capable, and developer-adopted frontier
            models for language and code in the industry.
          </p>
          <Button
            renderIcon={() => <ArrowRight />}
            className={styles.content__action}
          >
            Learn more
          </Button>
        </Section>
      </Column>
    </Grid>
  );
};

export default LandingPage;
