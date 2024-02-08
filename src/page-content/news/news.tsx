import React from 'react';
import { Column, Grid, Heading, Section } from '@carbon/react';
import { motion } from 'framer-motion';
import { showInView } from '@utils/showInView';
import PageShell from '../pageShell/pageShell';
import BlogPostData from './blogPostData';
import blog1 from './blogPost1';
import blog2 from './blogPost2';

import styles from './news.module.scss';

const blogs: BlogPostData[] = [blog1];

const NewsPage: React.FC = () => (
  <PageShell className={styles.wrapper} withContactPanel>
    <Section className={styles.news} level={1}>
      <Grid>
        <Column xlg={{ span: 10, offset: 1 }} lg={10} md={8} sm={4}>
          <Heading className={styles.heading}>
            <motion.span {...showInView}>News</motion.span>
          </Heading>
        </Column>
      </Grid>

      {blogs.map(({ anchor, date, renderBody }, idx) => (
        <div key={`blog-${idx}`} id={anchor}>
          <Grid className={styles.contentHeader}>
            <Column xlg={{ span: 6, offset: 1 }} lg={6} md={4} sm={4}>
              <motion.div {...showInView}>{date}</motion.div>
            </Column>
          </Grid>
          <Grid>
            <Column
              className={styles.content}
              xlg={{ span: 10, offset: 1 }}
              lg={10}
              md={8}
              sm={4}
            >
              <article>{renderBody(styles)}</article>
            </Column>
          </Grid>
        </div>
      ))}
    </Section>
  </PageShell>
);

export default NewsPage;
