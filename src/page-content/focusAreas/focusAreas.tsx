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
    title: 'Skills, Education and Research',
    subtitle:
      'Supporting global AI skills building, education, and exploratory research',
    body: 'Engineers and scientists from AI Alliance member organizations will come together to collaborate on exploring and advancing a diverse set of research topics including AI algorithms, models, platforms, and new techniques for power and resource efficient AI. Members will also collaborate to help close the AI skills gap by training underrepresented communities and adult learners in generative AI.',
  },
  {
    title: 'Safety and trust',
    subtitle:
      'Create testing, validation and benchmarking tools and methodologies to help build safe, secure, trusted and ethical AI',
    body: 'Engineers and scientists from AI Alliance member organizations will come together to collaborate on exploring and advancing a diverse set of research topics including AI algorithms, models, platforms, and new techniques for power and resource efficient AI. Members will also collaborate to help close the AI skills gap by training underrepresented communities and adult learners in generative AI.',
  },
  {
    title: 'Developer tools',
    subtitle:
      'Build and advance the most efficient and capable software frameworks and tools to enable AI model builders and GenAI application developers',
    body: 'Engineers and scientists from AI Alliance member organizations will come together to collaborate on exploring and advancing a diverse set of research topics including AI algorithms, models, platforms, and new techniques for power and resource efficient AI. Members will also collaborate to help close the AI skills gap by training underrepresented communities and adult learners in generative AI.',
  },
  {
    title: 'AI Hardware',
    subtitle:
      'Foster a vibrant AI hardware accelerator ecosystem by boosting contributions and adoption of essential enabling software technology',
    body: 'Engineers and scientists from AI Alliance member organizations will come together to collaborate on exploring and advancing a diverse set of research topics including AI algorithms, models, platforms, and new techniques for power and resource efficient AI. Members will also collaborate to help close the AI skills gap by training underrepresented communities and adult learners in generative AI.',
  },
  {
    title: 'Open Foundation models',
    subtitle:
      'Enable an ecosystem of open foundation models with diverse modalities, including highly capable multilingual, multi-modal, and science models',
    body: 'Engineers and scientists from AI Alliance member organizations will come together to collaborate on exploring and advancing a diverse set of research topics including AI algorithms, models, platforms, and new techniques for power and resource efficient AI. Members will also collaborate to help close the AI skills gap by training underrepresented communities and adult learners in generative AI.',
  },
  {
    title: 'Advocacy',
    subtitle:
      'Advocate for regulatory policies that create a healthy open ecosystem for AI',
    body: 'Engineers and scientists from AI Alliance member organizations will come together to collaborate on exploring and advancing a diverse set of research topics including AI algorithms, models, platforms, and new techniques for power and resource efficient AI. Members will also collaborate to help close the AI skills gap by training underrepresented communities and adult learners in generative AI.',
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
              The AI Alliance is focused on accelerating and disseminating open
              innovation across the AI technology landscape to improve
              foundational capabilities, ensure safety, security and trust in
              AI, and responsibly maximize benefits to people and society
              everywhere. Alliance members intend to start or enhance projects
              across six focus areas.
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
