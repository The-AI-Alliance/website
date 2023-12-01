import React from 'react';
import { Column, Grid, Heading, Section } from '@carbon/react';
import { motion } from 'framer-motion';
import { showInView } from '@utils/showInView';
import PageShell from '../pageShell/pageShell';

import styles from './news.module.scss';

const news = {
  type: 'Press release',
  date: 'December 5th, 2023',
};

const NewsPage: React.FC = () => (
  <PageShell className={styles.wrapper} withContactPanel>
    <Section className={styles.news} level={1}>
      <Grid>
        <Column xlg={{ span: 10, offset: 1 }} lg={10} md={8} sm={4}>
          <Heading className={styles.heading}>
            <motion.span {...showInView}>News</motion.span>
          </Heading>
        </Column>
      </Grid>

      <Grid className={styles.contentHeader}>
        <Column xlg={{ span: 6, offset: 1 }} lg={6} md={4} sm={4}>
          <motion.div {...showInView}>{news.type}</motion.div>
        </Column>
        <Column
          xlg={{ span: 4, offset: 7 }}
          lg={{ span: 4, offset: 6 }}
          md={4}
          sm={4}
        >
          <motion.div {...showInView}>{news.date}</motion.div>
        </Column>
      </Grid>
      <Grid>
        <Column
          className={styles.content}
          xlg={{ span: 10, offset: 1 }}
          lg={10}
          md={8}
          sm={4}
        >
          <article>
            <motion.h2 {...showInView}>
              AI Alliance Launches as an International Community of Leading
              Technology Developers, Researchers and Adopters Collaborating
              Together to Advance Open, Safe, Responsible AI
            </motion.h2>
            <motion.p className={styles.abstract}>
              IBM and Meta Launch the AI Alliance in collaboration with X
              Founding Members globally including AMD, Anyscale, CERN, Cleveland
              Clinic, Cornell University, Dartmouth College, Dell Technologies,
              EPFL, ETH, Hugging Face, Imperial College London, Intel, INSAIT,
              Linux Foundation, MOC Alliance operated by Boston University and
              Harvard, NSF, Oracle, Red Hat, Roadzen, ServiceNow, Sony Group,
              Stability AI, University of California Berkeley, University of
              Illinois, University of Tokyo, and Yale
            </motion.p>
            <section>
              <p>
                AI advancements are leading to new opportunities that can
                improve how we work, live, learn andinteract with one another.
                Open and transparent innovation is essential to empower a broad
                spectrumof AI researchers, builders, and adopters with the
                information and tools needed to harness theseadvancements in
                ways that prioritize safety, diversity, economic opportunity and
                benefits to all.
              </p>
              <p>
                While there are many individual companies, start-ups,
                researchers, governments, and others who arecommitted to open
                science and open technologies and want to participate in the new
                wave of AIinnovation, more collaboration and information sharing
                will help the community innovate faster andmore inclusively, and
                identify specific risks and mitigate those risks before putting
                a product into theworld.
              </p>
              <p>
                That is why today, we’re launching the{' '}
                <strong>AI Alliance</strong> – a group of leading organizations
                across industry,startup, academia, research and government
                coming together to support open innovation and openscience in
                AI. The AI Alliance is action oriented and decidedly
                international, designed to createopportunities everywhere
                through a diverse range of institutions that can shape the
                evolution of AI inways that better reflect the needs and the
                complexity of our societies.
              </p>
              <p>
                The AI Alliance is focused on fostering an open community and
                enabling developers and researchers toaccelerate responsible
                innovation in AI while ensuring scientific rigor, trust, safety,
                security, diversityand economic competitiveness. By bringing
                together leading developers, scientists, academicinstitutions,
                companies, and other innovators, we will pool resources and
                knowledge to address safetyconcerns while providing a platform
                for sharing and developing solutions that fit the needs
                ofresearchers, developers, and adopters around the world.
              </p>
              <p>
                To do that, the AI Alliance plans to start or enhance projects
                that meet the following objectives:
              </p>
              <ul>
                <li>
                  Develop and deploy benchmarks and evaluation standards, tools,
                  and other resources that enable the responsible development
                  and use of AI systems at global scale, including the creation
                  of a catalog of vetted safety, security and trust tools.
                  Support the advocacy and enablement of these tools with the
                  developer community for model and application development.
                </li>
                <li>
                  Responsibly advance the ecosystem of open foundation models
                  with diverse modalities, including highly capable
                  multilingual, multi-modal, and science models that can help
                  address society-wide challenges in climate, education, and
                  beyond.
                </li>
                <li>
                  Foster a vibrant AI hardware accelerator ecosystem by boosting
                  contributions and adoption of essential enabling software
                  technology.
                </li>
                <li>
                  Support global AI skills building and exploratory research.
                  Engage the academic community to support researchers and
                  students to learn and contribute to essential AI model and
                  tool research projects.
                </li>
                <li>
                  Develop educational content and resources to inform the public
                  discourse and policymakers on benefits, risks, solutions and
                  precision regulation for AI.
                </li>
                <li>
                  Launch initiatives that encourage open development of AI in
                  safe and beneficial ways, and host events to explore AI use
                  cases and showcase how Alliance members are using open
                  technology in AI responsibly and for good.
                </li>
              </ul>
            </section>
          </article>
        </Column>
      </Grid>
    </Section>
  </PageShell>
);

export default NewsPage;
