import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Column, Grid, Heading } from '@carbon/react';
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
import Ball from '@components/ball/ball';
import useResize from '@utils/useResize';
import useBreakpoint, { Breakpoint } from '@utils/useBreakpoint';

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
      show: {
        opacity: 1,
        transition: { delay: 0.35 },
      },
      unmount: { opacity: 0, transition: { duration: 0.35 } },
    }),
    [],
  );

  return (
    <motion.div
      variants={mainContentVariants}
      initial="hide"
      animate="show"
      exit="unmount"
    >
      <Grid className={styles.members}>
        <>
          <Column xlg={{ span: 15, offset: 1 }} lg={16} md={8} sm={4}>
            <Heading
              className={classnames(styles.heading, styles['heading--members'])}
            >
              Members
            </Heading>
          </Column>
          <Column xlg={{ span: 15, offset: 1 }} lg={16} md={8} sm={4}>
            <p className={styles.subheading}>
              The AI Alliance consists of companies and startups, universities,
              research and government organizations, and non-profit foundations
              that individually and together are innovating across all aspects
              of AI technology, applications and governance.
            </p>
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
        </>
      </Grid>

      <ContactPanel
        className={styles.contactPanel}
        background="straight"
        staticBall
      />
    </motion.div>
  );
};

export default MembersPage;
