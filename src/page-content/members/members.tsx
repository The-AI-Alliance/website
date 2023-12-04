import { FC } from 'react';
import { Column, Grid, Heading, Section } from '@carbon/react';
import classnames from 'classnames';
import Image from 'next/image';
import aitomatic from '@public/members/aitomatic.png';
import amd from '@public/members/amd.png';
import anyscale from '@public/members/anyscale.jpg';
import berkeley from '@public/members/berkeley.png';
import CC from '@public/members/CC.jpg';
import dartmouth from '@public/members/dartmouth.png';
import fast_ai from '@public/members/fast_ai.png';
import fenrir from '@public/members/fenrir.png';
import FPT from '@public/members/FPT.png';
import HUJI from '@public/members/HUJI.jpg';
import ibm from '@public/members/ibm.png';
import INSAIT from '@public/members/INSAIT.jpg';
import intel from '@public/members/intel.png';
import keio from '@public/members/keio.png';
import linux from '@public/members/linux.png';
import mass from '@public/members/mass.png';
import MBZUAI from '@public/members/MBZUAI.jpg';
import meta from '@public/members/meta.png';
import mlcommons from '@public/members/mlcommons.png';
import munich from '@public/members/munich.png';
import notre_dame from '@public/members/notre_dame.png';
import nyu from '@public/members/nyu.png';
import red_hat from '@public/members/red_hat.png';
import roadzen from '@public/members/roadzen.png';
import rpi from '@public/members/rpi.png';
import sbintuitions from '@public/members/sbintuitions.jpg';
import servicenow from '@public/members/servicenow.png';
import simons from '@public/members/simons.png';
import sony from '@public/members/sony.png';
import together from '@public/members/together.png';
import tokyo from '@public/members/tokyo.jpg';
import uiuc from '@public/members/uiuc.png';
import yale from '@public/members/yale.png';
import { motion } from 'framer-motion';
import { showInView } from '@utils/showInView';
import Testimonial from './testimonial';
import PageShell from '../pageShell/pageShell';

import styles from './members.module.scss';

import testimonials from './testimonials';

const logos = [
  { size: 1, src: aitomatic, alt: 'IBM' },
  { size: 2, src: amd, alt: 'RedHat' },
  { size: 1, src: anyscale, alt: 'Dell' },
  { size: 1, src: berkeley, alt: 'Intel' },
  { size: 1, src: CC, alt: 'SoftBank' },
  { size: 1, src: dartmouth, alt: 'Meta' },
  { size: 2, src: fast_ai, alt: 'Preferred Networks' },
  { size: 4, src: fenrir, alt: 'Cerebras' },
  { size: 2, src: FPT, alt: 'linux' },
  { size: 3, src: HUJI, alt: 'ML Commons' },
  { size: 1, src: ibm, alt: 'EPFL' },
  { size: 1, src: INSAIT, alt: 'MIT' },
  { size: 2, src: intel, alt: 'UIUC' },
  { size: 6, src: keio, alt: 'NASA' },
  { size: 1, src: linux, alt: 'ETH' },
  { size: 1, src: mass, alt: 'ESA' },
  { size: 1, src: MBZUAI, alt: 'TUM' },
  { size: 1, src: meta, alt: 'LangChain' },
  { size: 1, src: mlcommons, alt: 'EPFL' },
  { size: 1, src: munich, alt: 'MIT' },
  { size: 1, src: notre_dame, alt: 'MIT' },
  { size: 2, src: nyu, alt: 'UIUC' },
  { size: 6, src: red_hat, alt: 'NASA' },
  { size: 1, src: roadzen, alt: 'ETH' },
  { size: 1, src: rpi, alt: 'ESA' },
  { size: 1, src: sbintuitions, alt: 'TUM' },
  { size: 1, src: servicenow, alt: 'LangChain' },
  { size: 1, src: simons, alt: 'ETH' },
  { size: 1, src: sony, alt: 'ESA' },
  { size: 1, src: together, alt: 'TUM' },
  { size: 1, src: tokyo, alt: 'LangChain' },
  { size: 1, src: uiuc, alt: 'TUM' },
  { size: 1, src: yale, alt: 'LangChain' },
];

const MembersPage: FC = () => (
  <PageShell withContactPanel className={styles.wrapper}>
    <Section className={styles.members} level={1}>
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
            that individually and together are innovating across all aspects of
            AI technology, applications and governance.
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
                <Image className={styles[`size${size}`]} src={src} alt={alt} />
              </motion.div>
            ))}

            <div className={styles.filler}></div>
          </div>
        </Column>
      </Grid>
    </Section>

    {testimonials.length ? (
      <Section className={styles.testimonials} level={1}>
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
    ) : null}

    {/* <Section className={styles.join} level={1}>
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
            purposefully designed to enable flexible levels of collaboration and
            contribution to maximize the participation and impact of
            organizations and individuals globally.
          </motion.p>
        </Column>
      </Grid>
    </Section> */}
  </PageShell>
);

export default MembersPage;
