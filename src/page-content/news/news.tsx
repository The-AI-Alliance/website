import React, { useMemo } from 'react';
import { Column, Grid, Heading, Section } from '@carbon/react';
import ContactPanel from '../contact/contactPanel';
import { motion } from 'framer-motion';
import { showInView } from '@utils/showInView';

import styles from './news.module.scss';

const NewsPage: React.FC = () => {
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
      className={styles.wrapper}
      variants={mainContentVariants}
      initial="hide"
      animate="show"
      exit="unmount"
    >
      <Section className={styles.news}>
        <Grid className={styles.grid}>
          <Column xlg={{ span: 6, offset: 1 }} lg={6} md={6} sm={3}>
            <Heading className={styles.heading}>
              <motion.span {...showInView}>News</motion.span>
            </Heading>
          </Column>
          <Column
            xlg={{ span: 8, offset: 8 }}
            lg={{ span: 9, offset: 7 }}
            md={6}
            sm={4}
          ></Column>
          <Column xlg={{ span: 15, offset: 1 }} lg={16} md={8} sm={4}></Column>
        </Grid>
      </Section>
      <ContactPanel
        className={styles.contactPanel}
        background="straight"
        staticBall
      />
    </motion.div>
  );
};

export default NewsPage;
