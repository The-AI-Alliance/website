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
              It is a pivotal time in AI. Foundation models and generative AI
              are introducing opportunities that can improve how we work, live
              and interact with one another. This progress is possible because
              of decades of open innovation: the collaboration among communities
              of developers, scientists, academics, and business leaders to
              build, validate, and adopt the latest AI technologies that advance
              business and society.
            </motion.p>
            <motion.p {...showInView} custom={1}>
              This open ecosystem has been a catalyst for driving an AI agenda
              underpinned by trust, ethics, resiliency, and responsibility. The
              AI of today and tomorrow must continuously improve upon levels of
              governance and safety – and this can only be done through the
              collective power of an open, healthy AI community that promotes
              the exchange of ideas and collaboration on decisions and outputs.
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
              Recently, the large amount of computational and data resources
              required to build foundation models along with amplified concerns
              around model utility, trust, and risk, have threatened to relegate
              AI innovation to a small number of closed companies. The AI
              Alliance members are coming together to address these bottlenecks
              and accelerate and disseminate open innovation across the AI
              technology landscape to improve capabilities and responsibly
              benefit society.
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
