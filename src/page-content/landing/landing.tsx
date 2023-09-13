import React, { useCallback } from 'react';
import { Button, Column, Grid, Heading, Section } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import Shape1 from '@graphics/shape1.svg';
import Shape2 from '@graphics/shape2b.svg';
import useNavigation, { ROUTE } from '../../utils/useNavigation';

import styles from './landing.module.scss';

const LandingPage: React.FC = () => {
  const { navigate } = useNavigation();
  const handleNextPage = useCallback(() => navigate(ROUTE.LEARN), [navigate]);

  return (
    <Grid className={styles.landingPage}>
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
        xlg={{ span: 7, offset: 7 }}
        lg={{ span: 7, offset: 6 }}
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
            onClick={handleNextPage}
          >
            Learn more
          </Button>
        </Section>
      </Column>
    </Grid>
  );
};

export default LandingPage;
