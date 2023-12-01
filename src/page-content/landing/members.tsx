import { FC, RefObject } from 'react';
import { Column, Grid, Heading, Section } from '@carbon/react';
import { motion } from 'framer-motion';
import { showInView } from '@utils/showInView';
import classnames from 'classnames';
import MembersMapWithSidebar from '@graphics/membersMap.svg';
import MembersMapOnly from '@graphics/membersMapOnly.svg';

import styles from './members.module.scss';

// const MEMBERS = [
//   'A*STAR',
//   'Aitomatic',
//   'AMD',
//   'Anyscale',
//   'Cerebras',
//   'CERN',
//   'Cleveland Clinic',
//   'Dell Technologies',
//   'Ecole Polytechnique Federale de Lausanne (EPFL)',
//   'ETH Zurich',
//   'Fast.ai',
//   'FPT',
//   'Hebrew University',
//   'Hugging Face',
//   'IBM',
//   'Imperial College London',
//   'Indian Institute of Technology Bombay',
//   'International Center for Theoretical Physics',
//   'Institute for Computer Science, Artificial Intelligence',
//   'Intel',
//   'Keio University',
//   'LangChain',
//   'LlamaIndex',
//   'Mass Open Cloud Alliance',
//   'Meta',
//   'Mohamed bin Zayed University of Artificial Intelligence',
//   'MLCommons',
//   'National Aeronautics and Space Administration',
//   'National Science Foundation',
//   'NumFOCUS',
//   'Oracle',
//   'Quansight',
//   'Red Hat',
//   'Rensselaer Polytechnic Institute',
//   'Roadzen',
//   'Sakana AI',
//   'ServiceNow',
//   'Sony Group',
//   'Stability AI',
//   'Together AI',
//   'TU Munich',
// ];

type MembersProps = {
  className?: string;
  sectionRef?: RefObject<HTMLDivElement>;
};

const Members: FC<MembersProps> = ({ className, sectionRef }) => (
  <Section
    className={classnames(styles.members, className)}
    level={1}
    ref={sectionRef}
  >
    <Grid className={styles.members__grid}>
      <Column xlg={{ span: 8, offset: 1 }} lg={7} md={6} sm={3}>
        <motion.div {...showInView}>
          <Heading>AI Alliance members</Heading>
        </motion.div>
      </Column>
      <Column xlg={{ span: 15, offset: 1 }} lg={16} md={8} sm={4}>
        {/* <ul className={styles.members__list}>
          {MEMBERS.map((member, idx) => (
            <motion.li key={member} {...showInView} custom={idx * 0.1}>
            {member}
            </motion.li>
            ))}
          </ul> */}
        <MembersMapWithSidebar
          className={classnames(styles.map, styles.mapWithSidebar)}
        />
        <MembersMapOnly className={classnames(styles.map, styles.mapOnly)} />
      </Column>
      <Column xlg={0} lg={0} md={4} sm={4} className={styles.stat}>
        <div className={styles.statTitle}>Total represented R&D funding</div>
        <div className={styles.statValue}>&gt;$80B</div>
      </Column>
      <Column xlg={0} lg={0} md={4} sm={4} className={styles.stat}>
        <div className={styles.statTitle}>
          Students supported by these academic institutions
        </div>
        <div className={styles.statValue}>&gt;400,000</div>
      </Column>
      <Column xlg={0} lg={0} md={4} sm={4} className={styles.stat}>
        <div className={styles.statTitle}>Total staff members</div>
        <div className={styles.statValue}>&gt;100,000</div>
      </Column>
    </Grid>
  </Section>
);

export default Members;
