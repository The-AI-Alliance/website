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
  'Dell',
  'Ecole Polytechnique Federale de Lausanne (EPFL)',
  'ETH Zurich',
  'FPT',
  'Hebrew University',
  'Hugging Face',
  'IBM',
  'Imperial College London',
  'International Center for Theoretical Physics',
  'Institute for Computer Science, Artificial Intelligence (INSAIT)',
  'Intel',
  'LlamaIndex',
  'Massachusetts Open Cloud Alliance',
  'Meta',
  'Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)',
  'MLCommons',
  'National Aeronautics and Space Administration (NASA)',
  'National Science Foundation (NSF)',
  'Oracle',
  'RedHat',
  'Roadzen',
  'Sakana AI',
  'ServiceNow',
  'Sony',
  'Stability AI',
  'TU Munich',
  'University of California at Berkeley',
  'University of Illinois Urbana-Champagne',
  'University of Notre Dame',
  'University of Tokyo',
  'Yale University',
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
