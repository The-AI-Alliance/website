import { FC, RefObject } from 'react';
import { Column, Grid, Heading, Section } from '@carbon/react';
import { motion } from 'framer-motion';
import { showInView } from '@utils/showInView';
import classnames from 'classnames';

import styles from './members.module.scss';

const MEMBERS = [
  'A*STAR',
  'Aitomatic',
  'AMD',
  'Anyscale',
  'Cerebras',
  'CERN',
  'Cleveland Clinic',
  'Dell Technologies',
  'Ecole Polytechnique Federale de Lausanne (EPFL)',
  'ETH Zurich',
  'Fast.ai',
  'FPT',
  'Hebrew University',
  'Hugging Face',
  'IBM',
  'Imperial College London',
  'Indian Institute of Technology Bombay',
  'International Center for Theoretical Physics',
  'Institute for Computer Science, Artificial Intelligence',
  'Intel',
  'Keio University',
  'LangChain',
  'LlamaIndex',
  'Mass Open Cloud Alliance',
  'Meta',
  'Mohamed bin Zayed University of Artificial Intelligence',
  'MLCommons',
  'National Aeronautics and Space Administration',
  'National Science Foundation',
  'NumFOCUS',
  'Oracle',
  'Quansight',
  'Red Hat',
  'Rensselaer Polytechnic Institute',
  'Roadzen',
  'Sakana AI',
  'ServiceNow',
  'Sony Group',
  'Stability AI',
  'Together AI',
  'TU Munich',
];

type MembersProps = {
  className?: string;
  sectionRef?: RefObject<HTMLDivElement>;
};

const Members: FC<MembersProps> = ({ className, sectionRef }) => (
  <Section className={classnames(styles.members, className)} ref={sectionRef}>
    <Grid className={styles.members__grid}>
      <Column xlg={{ span: 7, offset: 1 }} lg={7} md={6} sm={3}>
        <motion.div {...showInView}>
          <Heading>AI Alliance members</Heading>
        </motion.div>
      </Column>
      <Column xlg={{ span: 15, offset: 1 }} lg={16} md={8} sm={4}>
        <ul className={styles.members__list}>
          {MEMBERS.map((member, idx) => (
            <motion.li key={member} {...showInView} custom={idx * 0.1}>
              {member}
            </motion.li>
          ))}
        </ul>
      </Column>
    </Grid>
  </Section>
);

export default Members;
