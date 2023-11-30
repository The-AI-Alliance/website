import React, { useMemo } from 'react';
import { Column, Grid, Heading, Section } from '@carbon/react';
import classnames from 'classnames';
import ContactPanel from '../contact/contactPanel';
import Image from 'next/image';
import cerebras from '@public/members/cerebras.png';
import dell from '@public/members/dell.png';
import epfl from '@public/members/epfl.png';
import esa from '@public/members/esa.png';
import ethz from '@public/members/ethz.png';
import ibm from '@public/members/ibm.png';
import intel from '@public/members/intel.png';
import langchain from '@public/members/langchain.png';
import linux from '@public/members/linux.png';
import meta from '@public/members/meta.png';
import mit from '@public/members/mit.png';
import ml_commons from '@public/members/ml_commons.png';
import nasa from '@public/members/nasa.png';
import preferred_networks from '@public/members/preferred_networks.png';
import redhat from '@public/members/redhat.png';
import soft_bank from '@public/members/soft_bank.png';
import tum from '@public/members/tum.png';
import uiuc from '@public/members/uiuc.png';
import { motion } from 'framer-motion';
import { showInView } from '@utils/showInView';
import testimonials from './testimonials';
import Testimonial from './testimonial';

import styles from './members.module.scss';

const logos = [
  { size: 1, src: ibm, alt: 'IBM' },
  { size: 2, src: redhat, alt: 'RedHat' },
  { size: 1, src: dell, alt: 'Dell' },
  { size: 1, src: intel, alt: 'Intel' },
  { size: 1, src: soft_bank, alt: 'SoftBank' },
  { size: 1, src: meta, alt: 'Meta' },
  { size: 2, src: preferred_networks, alt: 'Preferred Networks' },
  { size: 4, src: cerebras, alt: 'Cerebras' },
  { size: 2, src: linux, alt: 'linux' },
  { size: 3, src: ml_commons, alt: 'ML Commons' },
  { size: 1, src: epfl, alt: 'EPFL' },
  { size: 1, src: mit, alt: 'MIT' },
  { size: 2, src: uiuc, alt: 'UIUC' },
  { size: 6, src: nasa, alt: 'NASA' },
  { size: 1, src: ethz, alt: 'ETH' },
  { size: 1, src: esa, alt: 'ESA' },
  { size: 1, src: tum, alt: 'TUM' },
  { size: 1, src: langchain, alt: 'LangChain' },
];

const MembersPage: React.FC = () => {
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
      <Section className={styles.members}>
        <Grid className={styles.grid}>
          <Column xlg={{ span: 6, offset: 1 }} lg={6} md={6} sm={3}>
            <Heading
              className={classnames(styles.heading, styles['heading--members'])}
            >
              <motion.span {...showInView}>Members</motion.span>
            </Heading>
          </Column>
          <Column
            xlg={{ span: 8, offset: 8 }}
            lg={{ span: 9, offset: 7 }}
            md={6}
            sm={4}
          >
            <motion.p className={styles.paragraph} {...showInView}>
              The AI Alliance consists of companies and startups, universities,
              research and government organizations, and non-profit foundations
              that individually and together are innovating across all aspects
              of AI technology, applications and governance.
            </motion.p>
          </Column>
          <Column xlg={{ span: 15, offset: 1 }} lg={16} md={8} sm={4}>
            <div className={styles.logos}>
              {logos.map(({ size, src, alt }, idx) => (
                <motion.div
                  key={alt}
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { delay: idx / 50 },
                  }}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <Image
                    className={styles[`size${size}`]}
                    src={src}
                    alt={alt}
                  />
                </motion.div>
              ))}

              <div className={styles.filler}></div>
            </div>
          </Column>
        </Grid>
      </Section>

      <Section className={styles.testimonials}>
        <Grid className={styles.grid}>
          <Column xlg={{ span: 6, offset: 1 }} lg={6} md={6} sm={3}>
            <Heading
              className={classnames(styles.heading, styles['heading--members'])}
            >
              <motion.span {...showInView}>Testimonials</motion.span>
            </Heading>
          </Column>
          <Column
            xlg={{ span: 8, offset: 8 }}
            lg={{ span: 9, offset: 7 }}
            md={6}
            sm={4}
          >
            {testimonials.map((t, idx) => (
              <Testimonial key={idx} {...t} />
            ))}
          </Column>
        </Grid>
      </Section>

      <Section className={styles.join}>
        <Grid className={styles.grid}>
          <Column xlg={{ span: 6, offset: 1 }} lg={6} md={6} sm={3}>
            <Heading
              className={classnames(styles.heading, styles['heading--members'])}
            >
              <motion.span {...showInView}>Joining the AI Alliance</motion.span>
            </Heading>
          </Column>
          <Column
            xlg={{ span: 8, offset: 8 }}
            lg={{ span: 9, offset: 7 }}
            md={6}
            sm={4}
          >
            <motion.p className={styles.paragraph} {...showInView}>
              The AI alliance continues to welcome new partners who share our
              commitment to open AI innovation and collaboration. Our program is
              purposefully designed to enable flexible levels of collaboration
              and contribution to maximize the participation and impact of
              organizations and individuals globally.
            </motion.p>
          </Column>
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

export default MembersPage;
