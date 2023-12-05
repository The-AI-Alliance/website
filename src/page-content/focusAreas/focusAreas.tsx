import React from 'react';
import { Column, Grid, Heading, Section } from '@carbon/react';
import { motion } from 'framer-motion';
import { showInView } from '@utils/showInView';
import PageShell from '../pageShell/pageShell';

import styles from './focusAreas.module.scss';
import FocusAreaDetail from './focusAreaDetail';

type FocusAreaDetails = {
  title: string;
  subtitle: string;
  body: string;
};

const focusAreas: FocusAreaDetails[] = [
  {
    title: 'Responsible, Scalable AI',
    subtitle:
      'Create benchmarks, tools, and methodologies to ensure and evaluate high-quality and safe AI.',
    body: 'AI Alliance members will deploy benchmarks, tools, and other resources that enable the responsible development and use of AI systems at global scale, including the creation of a catalog of vetted safety, security and trust tools. This work will include supporting the advocacy and enablement of these tools with the developer community for model and application development. AI Alliance members will also develop and align on meaningful benchmarks and evaluation standards for open model releases and model deployment into applications.',
  },
  {
    title: 'Open Foundation Models',
    subtitle:
      'Enable an ecosystem of open foundation models with diverse modalities.',
    body: 'The AI Alliance will focus on responsibly advancing the ecosystem of open foundation models with diverse modalities, including highly capable multilingual, multi-modal, and science models that can help address society-wide challenges in climate, education, and beyond. To support AI model builders and application developers, AI Alliance members will join forces to help build and promote open-source tools for model training, tuning, and inference. The AI Alliance will also launch initiatives that encourage open development of AI in safe and beneficial ways, and host events to explore AI use cases.',
  },
  {
    title: 'Diversified AI Hardware',
    subtitle: 'Foster a vibrant AI hardware accelerator ecosystem.',
    body: 'AI Alliance members will collaborate on the benchmarking, optimization, and adaptation of AI workloads to advance a diverse set of hardware. This work will focus on scalability, platform adaptation, and advanced power, energy, and carbon modeling. Benchmarks and metrics developed for model inference, fine-tuning and energy consumption of large-scale AI workloads will be contributed to the open-source community.',
  },
  {
    title: 'Skills, Education and Research',
    subtitle:
      'Support global AI skills building, education, and exploratory research.',
    body: 'To help close the AI skill gap, AI Alliance members will engage the academic community to enable researchers and students to learn and contribute to essential AI model and tool research projects including AI algorithms, models, platforms, and new techniques for power and resource efficient AI.  Members will also collaborate to develop educational content and resources that inform the public discourse and policymakers on benefits, risks, solutions, and precision regulation for AI.',
  },
];

const FocusAreasPage: React.FC = () => {
  return (
    <PageShell className={styles.focusAreas} withContactPanel>
      <Section level={1}>
        <Grid className={styles.grid}>
          <Column xlg={{ span: 6, offset: 1 }} lg={6} md={6} sm={3}>
            <Heading className={styles.heading}>
              <motion.span {...showInView}>Focus areas</motion.span>
            </Heading>
          </Column>
          <Column
            xlg={{ span: 8, offset: 8 }}
            lg={{ span: 9, offset: 7 }}
            md={6}
            sm={4}
          >
            <motion.p className={styles.paragraph} {...showInView}>
              AI Alliance members intend to start or enhance projects aligned
              with its mission to accelerate open innovation across the AI
              technology landscape that responsibly benefits people and society
              everywhere.
            </motion.p>
          </Column>
        </Grid>
        {focusAreas.map((focusArea, idx) => (
          <FocusAreaDetail key={idx} className={styles.area} {...focusArea} />
        ))}
      </Section>
    </PageShell>
  );
};

export default FocusAreasPage;
