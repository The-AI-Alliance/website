import { FC, useCallback } from 'react';
import { Button, Column, Grid, Heading, Section } from '@carbon/react';
import { motion } from 'framer-motion';
import { showInView } from '@utils/showInView';
import { ArrowRight } from '@carbon/icons-react';
import Faq from '@components/faq/faq';
import useNavigation, { ROUTE } from '@utils/useNavigation';
import PageShell from '../pageShell/pageShell';

import styles from './learn.module.scss';

const LearnMorePage: FC = () => {
  const { navigate } = useNavigation();

  const onMembersCtaClick = useCallback(() => {
    navigate(ROUTE.MEMBERS);
  }, [navigate]);

  return (
    <PageShell className={styles.learnMore} withContactPanel>
      <Section level={1}>
        <Grid className={styles.grid}>
          <Column
            className={styles.contentRow}
            xlg={{ span: 6, offset: 1 }}
            lg={6}
            md={5}
            sm={4}
          >
            <Heading>
              <motion.span {...showInView}>
                Open innovation in AI is essential
              </motion.span>
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
              AI advancements are leading to new opportunities that can improve
              how we work, live, learn and interact with one another. Open and
              transparent innovation is essential to empower a broad spectrum of
              AI researchers, builders, and adopters with the information and
              tools needed to harness these advancements in ways that prioritize
              safety, diversity, economic opportunity and benefits to all.
            </motion.p>
          </Column>
        </Grid>
      </Section>

      <Section level={1}>
        <Grid className={styles.grid}>
          <Column
            className={styles.contentRow}
            xlg={{ span: 6, offset: 1 }}
            lg={{ span: 6 }}
            md={5}
            sm={4}
          >
            <Heading>
              <motion.span {...showInView}>
                Meeting the challenges of open innovation
              </motion.span>
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
              While there are many individual companies, start-ups, researchers,
              governments, and others who are committed to open science and open
              technologies and want to participate in the new wave of AI
              innovation, more collaboration and information sharing will help
              the community innovate faster and more inclusively, and identify
              specific risks and mitigate those risks before putting a product
              into the world.
            </motion.p>
            <Button className={styles.membersCta} onClick={onMembersCtaClick}>
              Meet our members <ArrowRight />
            </Button>
          </Column>
        </Grid>
      </Section>

      <Section level={1}>
        <Grid className={styles.grid}>
          <Column
            className={styles.contentRow}
            xlg={{ span: 6, offset: 1 }}
            lg={6}
            md={5}
            sm={4}
          >
            <Heading>
              <motion.span {...showInView}>FAQ</motion.span>
            </Heading>
          </Column>
          <Column
            className={styles.contentRow}
            xlg={{ span: 15, offset: 1 }}
            lg={16}
            md={8}
            sm={4}
          >
            <Faq />
          </Column>
        </Grid>
      </Section>
    </PageShell>
  );
};

export default LearnMorePage;
