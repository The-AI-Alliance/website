import React, { useMemo } from 'react';
import { Column, Grid, Heading } from '@carbon/react';
import classnames from 'classnames';
import ContactPanel from '../contact/contactPanel';
import { motion } from 'framer-motion';

import styles from './focusAreas.module.scss';

const FocusAreasPage: React.FC = () => {
  const mainContentVariants = useMemo(
    () => ({
      hide: { opacity: 0 },
      show: { opacity: 1 },
      unmount: { opacity: 0, transition: { duration: 0.2 } },
    }),
    [],
  );

  return (
    <motion.div
      variants={mainContentVariants}
      initial="hide"
      animate="show"
      exit="unmount"
    >
      <Grid className={styles.focusAreas}>
        <Column xlg={{ span: 15, offset: 1 }} lg={16} md={8} sm={4}>
          <Heading
            className={classnames(styles.heading, styles['heading--members'])}
          >
            Focus areas
          </Heading>
        </Column>
        <Column xlg={{ span: 15, offset: 1 }} lg={16} md={8} sm={4}></Column>
      </Grid>

      <ContactPanel
        className={styles.contactPanel}
        background="straight"
        staticBall
      />
    </motion.div>
  );
};

export default FocusAreasPage;
