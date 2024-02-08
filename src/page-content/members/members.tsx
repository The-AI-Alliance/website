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
import stability from '@public/members/stability.png';
import together from '@public/members/together.png';
import tokyo from '@public/members/tokyo.jpg';
import uiuc from '@public/members/uiuc.png';
import yale from '@public/members/yale.png';
import openteams from '@public/members/openteams.png';
import pai from '@public/members/pai.png';
import numfocus from '@public/members/numfocus.png';
import sakana_ai from '@public/members/sakana_ai.png';
import langchain from '@public/members/langchain.png';
import ictp from '@public/members/ictp.png';
import hf from '@public/members/hf.png';
import cerebras from '@public/members/cerebras.png';
import eth from '@public/members/eth.png';
import utexas from '@public/members/utexas.png';
import astar from '@public/members/astar.png';
import quansight from '@public/members/quansight.png';
import bombay from '@public/members/bombay.png';
import llama from '@public/members/llama.png';
import epfl from '@public/members/epfl.png';
import silo from '@public/members/silo.png';
import lightning from '@public/members/lightning.png';
import oracle from '@public/members/oracle.png';
import w_and_b from '@public/members/w_and_b.png';
import northeastern from '@public/members/northeastern.jpg';
import citadel from '@public/members/citadel.png';
import databricks from '@public/members/databricks.jpg';
import buffalo from '@public/members/buffalo.png';
import predibase from '@public/members/predibase.png';
import zilliz from '@public/members/zilliz.png';
import snowflake from '@public/members/snowflake.png';
import uber from '@public/members/uber.png';
import penn from '@public/members/penn.png';
import anaconda from '@public/members/anaconda.png';
import applied_digital from '@public/members/applied_digital.png';
import core_42 from '@public/members/core_42.png';
import domino from '@public/members/domino.png';
import hitachi from '@public/members/hitachi.png';
import kera from '@public/members/kera.png';
import lastmile from '@public/members/lastmile.png';
import nec from '@public/members/nec.png';
import esade from '@public/members/esade.png';
import caics from '@public/members/caics.png';
import mlops from '@public/members/mlops.png';
import neo4j from '@public/members/neo4j.png';
import seed_ai from '@public/members/seed_ai.png';
import { motion } from 'framer-motion';
import { showInView } from '@utils/showInView';
import PageShell from '../pageShell/pageShell';

import styles from './members.module.scss';

import testimonials from './testimonials';

const logos = [
  { size: 0, src: aitomatic, alt: 'Aitomatic' },
  { size: 1, src: amd, alt: 'AMD' },
  { size: 1, src: anaconda, alt: 'Anaconda' },
  { size: 1, src: anyscale, alt: 'AnyScale' },
  { size: 2, src: applied_digital, alt: 'Applied Digital' },
  { size: 5, src: astar, alt: 'astar' },
  { size: 6, src: berkeley, alt: 'Berkeley' },
  { size: 3, src: buffalo, alt: 'University at Buffalo' },
  { size: 6, src: caics, alt: 'CAICS' },
  { size: 6, src: cerebras, alt: 'Cerebras' },
  { size: 3, src: citadel, alt: 'Citadel AI' },
  { size: 1, src: CC, alt: 'CC' },
  { size: 7, src: core_42, alt: 'Core 42' },
  { size: 0, src: dartmouth, alt: 'dartmouth' },
  { size: 6, src: databricks, alt: 'databricks' },
  { size: 1, src: domino, alt: 'Domino Data Lab' },
  { size: 3, src: eth, alt: 'eth' },
  { size: 4, src: epfl, alt: 'EPFL' },
  { size: 7, src: esade, alt: 'ESADE' },
  { size: 7, src: fast_ai, alt: 'Fast AI' },
  { size: 4, src: fenrir, alt: 'Fenrir' },
  { size: 5, src: FPT, alt: 'FPT' },
  { size: 5, src: hitachi, alt: 'Hitachi' },
  { size: 6, src: HUJI, alt: 'HUJI' },
  { size: 5, src: hf, alt: 'Hugging Face' },
  { size: 4, src: ictp, alt: 'ICTP' },
  { size: 7, src: ibm, alt: 'IBM' },
  { size: 4, src: INSAIT, alt: 'INSAIT' },
  { size: 2, src: intel, alt: 'Intel' },
  { size: 6, src: bombay, alt: 'Bombay' },
  { size: 6, src: keio, alt: 'keio' },
  { size: 4, src: kera, alt: 'Kera' },
  { size: 3, src: langchain, alt: 'LangChain' },
  { size: 1, src: lastmile, alt: 'Last Mile AI' },
  { size: 2, src: lightning, alt: 'Lightning AI' },
  { size: 2, src: linux, alt: 'Linux' },
  { size: 3, src: llama, alt: 'LlamaIndex' },
  { size: 3, src: mass, alt: 'Mass' },
  { size: 7, src: mlops, alt: 'ML Ops' },
  { size: 3, src: MBZUAI, alt: 'MBZUAI' },
  { size: 5, src: meta, alt: 'Meta' },
  { size: 1, src: mlcommons, alt: 'ML Commons' },
  { size: 1, src: munich, alt: 'Munich' },
  { size: 6, src: nec, alt: 'NEC' },
  { size: 2, src: neo4j, alt: 'NEO4J' },
  { size: 6, src: notre_dame, alt: 'Notre Dame' },
  { size: 6, src: northeastern, alt: 'Northeastern' },
  { size: 3, src: numfocus, alt: 'NumFocus' },
  { size: 4, src: nyu, alt: 'NYU' },
  { size: 1, src: openteams, alt: 'openteams' },
  { size: 5, src: oracle, alt: 'oracle' },
  { size: 2, src: pai, alt: 'pai' },
  { size: 3, src: penn, alt: 'Penn' },
  { size: 1, src: predibase, alt: 'Predibase' },
  { size: 6, src: quansight, alt: 'quansight' },
  { size: 2, src: red_hat, alt: 'RedHat' },
  { size: 2, src: roadzen, alt: 'Roadzen' },
  { size: 1, src: rpi, alt: 'RPI' },
  { size: 6, src: sakana_ai, alt: 'Sakana AI' },
  { size: 2, src: sbintuitions, alt: 'sbintuitions' },
  { size: 3, src: seed_ai, alt: 'SeedAI' },
  { size: 4, src: servicenow, alt: 'ServiceNow' },
  { size: 1, src: silo, alt: 'Silo' },
  { size: 2, src: simons, alt: 'simons' },
  { size: 4, src: snowflake, alt: 'Slowflake' },
  { size: 5, src: sony, alt: 'sony' },
  { size: 2, src: stability, alt: 'Stability' },
  { size: 3, src: utexas, alt: 'Univerity of Texas' },
  { size: 1, src: together, alt: 'together' },
  { size: 2, src: tokyo, alt: 'tokyo' },
  { size: 6, src: uiuc, alt: 'uiuc' },
  { size: 3, src: uber, alt: 'Uber' },
  { size: 2, src: w_and_b, alt: 'Weights and Biases' },
  { size: 0, src: yale, alt: 'yale' },
  { size: 7, src: zilliz, alt: 'Zilliz' },
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
      </Grid>
    </Section>

    <Section className={styles.logosSection} level={1}>
      <Grid className={styles.grid}>
        <Column xlg={{ span: 15, offset: 1 }} lg={16} md={8} sm={4}>
          <div className={styles.logos}>
            {logos.map(({ size, src, alt }) => (
              <div key={alt}>
                <Image className={styles[`size${size}`]} src={src} alt={alt} />
              </div>
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
            {/* {testimonials.map((t, idx) => (
              <Testimonial key={idx} {...t} />
            ))} */}
            <motion.blockquote {...showInView}>
              <strong>Arvind Krishna, IBM Chairman and CEO: </strong>
              “The progress we continue to witness in AI is a testament to open
              innovation and collaboration across communities of creators,
              scientists, academics and business leaders. This is a pivotal
              moment in defining the future of AI. IBM is proud to partner with
              like-minded organizations through the AI Alliance to ensure this
              open ecosystem drives an innovative AI agenda underpinned by
              safety, accountability and scientific rigor.”
            </motion.blockquote>

            <motion.blockquote {...showInView}>
              <strong>Nick Clegg, President, Global Affairs of Meta: </strong>
              “We believe it’s better when AI is developed openly – more people
              can access the benefits, build innovative products and work on
              safety. The AI Alliance brings together researchers, developers
              and companies to share tools and knowledge that can help us all
              make progress whether models are shared openly or not. We’re
              looking forward to working with partners to advance the
              state-of-the-art in AI and help everyone build responsibly.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>Lisa Su, AMD CEO and Chair: </strong>
              “At AMD, we are committed to advancing technology through
              collaboration. The history of our industry highlights how open,
              standards-based development leveraging the capabilities of the
              entire industry both accelerate innovation and ensure technology
              advances have the largest positive impact. By embracing open
              standards and transparency across all aspects of the rapidly
              developing AI ecosystem, we can help ensure the transformational
              benefits of responsible AI are broadly available. We are proud to
              join with other industry leaders as a founding member of the AI
              Alliance and look forward to working together to ensure the rapid
              advances in AI are a force for positive change.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Dr. Sun Sumei, Acting Executive Director, A*STAR’s Institute for
                Infocomm Research (I²R):{' '}
              </strong>
              “As a research institute under A*STAR, I²R spearheads research
              initiatives and actively strives to enhance the tangible impact of
              our innovations to address the national needs of Singapore and its
              people. We are proud to be a founding member of this AI Alliance,
              which will allow us to play a pivotal role in the ecosystem,
              contribute to the development of ethical and trustworthy AI
              innovations with well-regulated AI models for impactful real-world
              applications. Through the collective efforts with the rest of the
              members, we believe that the evolution, application and adoption
              of AI will reach new heights.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Christopher Nguyen, CEO, Aitomatic & Industrial AI Leader:{' '}
              </strong>
              “AI independence is vital for industrial companies, focusing on
              specialized domain expertise as key to competitiveness.
              Open-source foundations, driven by the AI Alliance, are essential
              for seamless model deployment at the computing edge. Aitomatic and
              our partners are eager to both contribute to and benefit from the
              transformative impact of the global AI Alliance.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>Robert Nishihara, CEO of Anyscale: </strong>
              “AI will have a positive impact on our daily lives and address
              some of the world’s most pressing challenges, but like with any
              new technology or innovation, we need to consider the risks. To
              ensure that open source communities can continue to flourish,
              innovate, deliver rich technological progress and advance the
              broader AI ecosystem, it’s imperative that we advance AI ethics,
              governance and safety. The AI Alliance is an important step to
              ensuring that our society can benefit from AI responsibly and
              equitably.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Yannis Paschalidis, Distinguished Professor of ECE and Director
                of the Hariri Institute for Computing and Computational Science
                & Engineering at Boston University:{' '}
              </strong>
              “The Hariri Institute, which houses the multi-institutional Mass
              Open Cloud Alliance (MOC Alliance), is excited to have the MOC
              Alliance join the AI Alliance as a founding member. The MOC
              Alliance was formed to provide an affordable open cloud platform
              to the research community, thus furthering the goals of the
              Massachusetts Green High Performance Computing Center (MGHPCC) --
              a joint venture of Boston University, Harvard, MIT, Northeastern,
              and UMass. The Hariri Institute has a history of supporting
              open-source efforts and is at the forefront of AI innovations with
              applications in science, biomedicine, and health care, where open,
              trusted, unbiased, and ethical AI models are particularly
              important.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Andrew Feldman, co-founder and CEO, Cerebras Systems:{' '}
              </strong>
              “Cerebras’ mission is to transform AI compute and democratize
              access to AI for customers around the world. In alliance with this
              community of global technology leaders, we look forward to
              accelerating the progress and contributions of the open source AI
              community in the most efficient, collaborative, and responsible
              way possible.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Tom Mihaljevic, M.D., Cleveland Clinic CEO and President, and
                holder of the Morton L. Mandel CEO Chair:{' '}
              </strong>
              “We are pleased to become a founding member of the AI Alliance. As
              a leader in healthcare AI, we recognize that it has the potential
              to quickly accelerate the pace of medical research and enhance
              patient care. AI capabilities are now constantly growing and
              improving, and it is critical that organizations from diverse
              fields come together to help advance AI discoveries and
              technologies while also addressing concerns around security and
              safety. We are looking forward to working on these important
              issues collaboratively with the Alliance members.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Krystyn J Van Vliet, Vice President for Research and Innovation
                at Cornell University:{' '}
              </strong>
              “Cornell looks forward to participating in this AI Alliance, and
              to the range of participants and perspectives around this table.
              Open innovation has spurred incredible advances in many fields
              including AI and thrives on experimentation and dialogue. We look
              forward to contributing to the discussions, technologies, and
              advances that will help the world develop knowledge and tools
              using AI, as well as a shared sense of responsibility for positive
              impact on society.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Dave Kotz, Provost and the Pat and John Rosenwald Professor in
                the Department of Computer Science, Dartmouth:{' '}
              </strong>
              “Dartmouth, where ‘artificial intelligence’ was first envisioned
              in 1956, is excited to be part of this alliance and committed to
              ensuring AI is transparent, trustworthy, and serves all humanity
              going forward.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Jeff Boudreau, chief AI officer, Dell Technologies:{' '}
              </strong>
              “AI progress that drives real value for humanity can only happen
              with open innovation and in open ecosystems. The AI Alliance is a
              positive step in making sure a diverse set of voices are
              collaborating transparently for the benefit of all.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Marcel Salathé & Pascal Frossard, co-directors of the EPFL AI
                Center:{' '}
              </strong>
              “EPFL is committed to the open, transparent, and safe development
              of AI, recognizing its significance for everyone. Through global
              collaborations like the AI alliance, we aim to ensure that
              progress in AI technology is ethical, efficient, and universally
              beneficent.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>Jeremy Howard, founding researcher, Fast.ai: </strong>
              “Open source is the backbone of all leading artificial
              intelligence software. With open source, the entire community
              comes together to collaborate on solving the toughest problems,
              the most effective solutions rise to the top, and everyone
              benefits.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>Phong Nguyen, CAIO, FPT Software: </strong>
              “FPT Software is thrilled and honored to join the Alliance, where
              we believe that openness and transparency are key to ensuring the
              safe and responsible deployment of AI. Committed to this vision,
              we aim to work closely with various stakeholders to enhance
              open-science AI, ultimately bringing significant social benefits
              to the industry.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                President Asher Cohen, Hebrew University of Jerusalem:{' '}
              </strong>
              “Joining the AI Alliance marks a pivotal moment for Hebrew
              University, where collaboration meets innovation. We’re thrilled
              to be part of this coalition driving the future of AI, fostering
              open technologies, nurturing talent, and championing ethical,
              trusted AI practices. Together, we’ll forge pathways for global
              education, build robust frameworks, and advocate for policies that
              nurture a vibrant, open AI ecosystem. This alliance is a beacon
              illuminating our commitment to shaping a responsible, inclusive
              future powered by the boundless possibilities of artificial
              intelligence.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>Atish Dabholkar, ICTP Director: </strong>
              “ICTP is pleased to be part of the high-level, international
              research community underpinning the AI Alliance that includes
              major players in the field. We share a commitment to exploring new
              scientific horizons and to sharing new knowledge openly. AI has
              the potential to radically change the way science is done, and by
              joining this Alliance we will ensure that our large international
              network of scientists have open access to the latest in AI
              innovation, training and governance, regardless of geographical
              borders.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Professor Varsha Apte, Head, Department of Computer Science and
                Engineering at IIT Bombay:{' '}
              </strong>
              “The Computer Science Department of IIT Bombay is excited to be
              part of the AI Alliance. We hope to contribute towards creating
              and deploying speech and language models over more diverse
              languages, accents and dialects, while also investigating
              foundation models for better representation of structurally rich
              information.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Professor Bob Shorten, Head of Dyson School of Engineering,
                Imperial College London:{' '}
              </strong>
              “We are delighted to be a founding member of the AI Alliance. At
              Imperial College London, we believe that community engagement is
              essential for making AI trusted, responsible, transparent, as well
              as auditable. We look forward to engaging with the Alliance
              community to realise these objectives.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Professor Martin Vechev, Scientific Director of INSAIT, Full
                Professor at ETH Zurich:{' '}
              </strong>
              “INSAIT is delighted to join the AI Alliance and help pave the way
              towards a more transparent, open, safe and trustworthy AI.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Deepak Patil, CVP and GM Intel Datacenter AI Solutions:{' '}
              </strong>
              “Intel has long supported the open ecosystem to drive innovation
              and the future of technology. The AI Alliance provides an
              opportunity for a broad community to come together to advance the
              future of artificial intelligence technologies including data
              sets, models and tools rooted in responsibility, ethics,
              trustworthy and security practices. By collaborating across the
              industry, the advancement of this technology can be driven forward
              with speed and transparency. We look forward to working with this
              diverse group to help shape an open, responsible AI ecosystem.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>Prof. Kohei Itoh, President, Keio University: </strong>
              “Keio University is excited to be a part of this new alliance that
              will play a key role in our contribution to expanding the horizon
              of computing by combining supercomputing, quantum computing,
              semiconductor, and AI research.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Jim Zemlin, Executive Director, Linux Foundation:{' '}
              </strong>
              “The AI Alliance is another milestone in the process of providing
              for openly shareable software, data, and other assets essential to
              the development of transparent, advanced and trustworthy AI. Open
              collaborative processes and open governance are essential to these
              efforts and working with our{' '}
              <a href="https://pytorch.org/">PyTorch Foundation</a>,{' '}
              <a href="https://lfaidata.foundation/">
                LF AI and Data Foundation
              </a>
              ,{' '}
              <a href="https://www.cncf.io/">
                Cloud Native Computing Foundation
              </a>
              , we look forward to participating in and assisting the Alliance
              by providing a neutral home for essential elements of the AI
              ecosystem.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>Jerry Liu, Co-founder and CEO, Llama Index: </strong>
              “Open-source software is one of the most important components in
              making sure that AI is understandable, explainable, and accessible
              to everyone. The mission of LlamaIndex is to empower all
              developers to connect LLMs with their private data. We support the
              development of open-source models and supporting tooling so that
              developers can take advantage of a strong ecosystem of different
              choices in achieving this mission.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Orran Krieger, Professor ECE and CS and Director of the Mass
                Open Cloud Alliance (MOC Alliance):{' '}
              </strong>
              “The MOC Alliance is excited to have its open production cloud be
              a part of the Open AI Alliance. The AI Alliance’s mission of
              enabling AI in an open and transparent matter is an exciting match
              for a cloud based on open source with all the operations state and
              telemetry available to enable innovation. We hope to both be a
              cost-effective platform for many of the research and non-profit
              users that are part of the AI Alliance, as well as a place where
              AI Alliance participants who are developing new tools and
              platforms can expose their innovation to our large community of
              existing AI researchers/users.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Timothy Baldwin, Acting Provost, Mohamed bin Zayed University of
                Artificial Intelligence (MBZUAI):{' '}
              </strong>
              “MBZUAI recognizes the transformative impact of collaborative
              efforts in fostering innovation. The open ecosystem cultivated by
              the alliance mirrors our core values, emphasizing principles such
              as scientific rigor, trust, ethics, transparency and
              responsibility. As one of the founding members, MBZUAI recognizes
              the transformative potential of foundation models and generative
              AI. Our recent launch of the Institute of Foundational Models
              solidifies our commitment to advancing academic research into
              foundational models with linguistic, visual, and biological
              capabilities and beyond. These models are driving transformation
              in industries as diverse as sustainability and healthcare. We are
              honored to be part of the AI Alliance, and we eagerly anticipate
              the collaborative strides we will make towards shaping a future
              where AI benefits people and society everywhere.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>David Kanter, MLCommons Executive Director: </strong>
              “MLCommons believes in collaborative engineering to build industry
              standard benchmarks and metrics to help drive AI forward in key
              areas such as performance and safety. We look forward to working
              with the AI Alliance in these areas to make all AI safer for
              everyone.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>Kevin Murphy, Chief Science Data Officer, NASA: </strong>
              “Open innovation is all but essential to ensuring equitable access
              and collaboration around AI and root this technology in principles
              that adhere to the strongest standards of diversity, trust and
              ingenuity. NASA is excited about efforts like the AI Alliance to
              continue enabling the global community of scientists, researchers,
              and practitioners committed to responsible, trustworthy AI
              technologies.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>Sethuraman Panchanathan, NSF Director: </strong>
              “The U.S. National Science Foundation is delighted to partner with
              the AI Alliance to meet our shared goals of supporting AI-driven
              discovery and innovation. The NAIRR pilot seeks to connect
              America’s broad and diverse research community with the resources
              needed to pursue the frontiers of AI in a safe, secure, and
              trustworthy manner. The resources and tools developed by the AI
              Alliance will strengthen and extend the NAIRR pilot’s ability to
              advance AI innovation in areas of societal and economic
              importance, ensuring the U.S. remains in the vanguard of
              competitiveness in this key technology.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>Leah Silen, Executive Director, NumFOCUS: </strong>
              “NumFOCUS supports many of the open-source scientific computing
              projects and communities foundational to AI research and
              innovation. We look forward to opportunities for collaboration
              among this community of support and advocacy for open-source AI.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Stacie Bloom, Chief Research Officer and Vice Provost for
                Research, NYU:{' '}
              </strong>
              “NYU is excited about this opportunity to connect our world class
              AI research community with so many outstanding institutions
              including IBM and Meta. This Alliance aligns with our goals to
              drive science and technology solutions on a global scale, and in a
              way that is safe, responsible, accessible and equitable.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Travis E. Oliphant, author of NumPy and SciPy, founder of
                Anaconda, CEO and founder of Quansight and OpenTeams:{' '}
              </strong>
              “We’re eager to contribute to an open, collaborative dialogue
              shaping the responsible development of AI. Embracing principles of
              transparency, ethics, and collaboration amplified by the
              open-source communities we serve, we envision a future where
              diverse voices continue to drive socially beneficial innovation in
              AI. Our commitment is to actively collaborate and share our
              expertise to ensure a responsible, open, and accessible AI
              ecosystem.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>Rebecca Finlay, CEO, Partnership on AI: </strong>
              “Partnership on AI is dedicated to creating a global community to
              catalyze AI developments that benefit people and society. It is
              important that open science and innovation contribute to safe and
              responsible AI. We look forward to continuing our work on this
              with PAI Partners, members of the Alliance, and the broader AI
              ecosystem.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>Matt Hicks, president and CEO, Red Hat: </strong>
              “Collaboration and open innovation have always been true catalysts
              for progress. The launch of the AI Alliance marks a visionary
              milestone, uniting industry giants, academia, and innovators with
              a shared responsibility to shape the future and advance open
              innovation, ensuring that the transformative power of AI is
              harnessed responsibly and ethically. As a founding member of the
              AI Alliance, Red Hat recognizes the collective potential of an
              open, healthy AI community — a force that will not only build
              technologies but also advocate for a future where innovation knows
              no bounds.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Martin A. Schmidt, Ph.D., Rensselaer Polytechnic Institute
                President:{' '}
              </strong>
              “Rensselaer Polytechnic Institute is honored to become a founding
              member of the AI Alliance. We believe the responsible application
              of artificial intelligence enables infinite possibilities in
              discovery and innovation. We look forward to collaborating with
              the alliance as we accelerate our work in artificial intelligence
              and quantum computing.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>Rohan Malhotra, CEO and Founder, Roadzen: </strong>
              “The AI Alliance’s focus on fostering an open and diverse
              ecosystem is a pivotal step in advancing AI research worldwide.
              It’s a striking contrast to the idea of AI being tightly
              controlled by a few entities. As Roadzen joins this global
              initiative alongside the industry’s leaders and researchers, our
              commitment is twofold: to support this vision and to leverage our
              expertise in building AI that is not just groundbreaking but also
              safe, accessible, and beneficial for all.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>CJ Desai, president & COO, ServiceNow: </strong>
              “AI innovation must remain open to drive positive and equitable
              societal impact, foster continued progress, and address potential
              risks collaboratively. There is no room for a winner-take-all
              approach; the development of responsible, secure LLMs comes in
              many forms. By joining this alliance, ServiceNow is doubling down
              on open innovation, harnessing the collective talent and expertise
              across the global open-source community. This move aims to ensure
              AI development is grounded in the needs of society, both today and
              in the future.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>David Spergel, President, Simons Foundation: </strong>
              “The Simons Foundation is strongly committed to open codes, open
              data and open scientific literature. We have been long supporters
              of the arXiv, a key site for open science. We see this support of
              open source code for AI as essential for both advancing the
              science and enabling ethical use of AI.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Dr. Hiroaki Kitano, Senior Executive Vice President and CTO of
                Sony Group Corporation:{' '}
              </strong>
              “As a global technology and entertainment company, Sony believes
              in developing new technology for the benefit of the creative
              community and society at large in an ethical, legal, and
              responsible manner. We look forward to working together with
              representatives from the diverse international open-source
              community across industry, academic, research, and government
              organizations to develop AI models, data, guidelines and best
              practices that ensure safe and responsible usage of such
              technology.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>Emad Mostaque, CEO of Stability AI: </strong>
              “Stability AI, a leader in developing advanced open AI models, and
              IBM, a champion of open-source innovation, proudly announce our
              partnership with The AI Alliance. Together, we are poised to
              redefine the landscape of generative AI, focusing on breakthrough
              innovations with a steadfast commitment to trust and safety in
              this dynamic field.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Vipul Ved Prakash, Co-founder and CEO of Together AI:{' '}
              </strong>
              “We are excited to join the alliance because we believe in the
              power of the community and openness. This is the path to safe and
              responsible AI, and we are interested in building the platform to
              enable the open models community to thrive.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>Thomas F. Hofmann, TUM president: </strong>
              “With this alliance, we want to accelerate the development of
              responsible, socially acceptable and scalable AI solutions in
              partnership with other leading universities and companies.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Jennifer Chayes, Dean, UC Berkeley’s College of Computing, Data
                Science, and Society:{' '}
              </strong>
              “Pursuing open innovation levels the playing field, allowing
              everyone to share in the benefits of generative AI.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Rashid Bashir, dean of The Grainger College of Engineering,
                University of Illinois Urbana-Champaign:{' '}
              </strong>
              “Grainger Engineers have been conducting AI research since the
              dawn of computing and UIUC is a hotbed of AI innovation today
              because of that rich history. Today, with three of the nation’s
              NSF AI Institutes, and numerous cross-sector partnerships, we are
              advancing research and workforce development to accelerate safe,
              responsible AI progress. UIUC is proud to join our esteemed peers
              and partners in this vital alliance.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                University President Rev. John I. Jenkins, C.S.C., University of
                Notre Dame:{' '}
              </strong>
              “Innovations in artificial intelligence offer, at the same time,
              the promise of serving the common good and the threat of
              undermining it. It is critical that we engage serious ethical
              questions about AI alongside the technological. Notre Dame has
              long been a place for researching and reflecting on the ethical
              implications of science and technology, and we are pleased that
              through the AI Alliance we will be able to lend a distinctive
              voice and perspective to the conversation about building
              technologies that are both innovative and ethical.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Jeffrey F. Rhoads, vice president for research and professor in
                the Department of Aerospace and Mechanical Engineering at the
                University of Notre Dame:{' '}
              </strong>
              “The technologies that will truly move our world forward will be
              the ones that emerge from an inclusive, interdisciplinary
              innovation ecosystem. As a founding partner in the AI Alliance,
              Notre Dame’s engineers, data scientists, ethicists, and other
              researchers will be able to collaborate to build that ecosystem,
              joining both with AI labs around the world and with the industry
              partners who get new technologies into the hands of users. This
              will bring an unprecedented opportunity to our faculty and our
              students as they help steer innovations that bring benefits to
              society.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Adam Klivans, Director, UT-Austin Machine Learning Lab:{' '}
              </strong>
              “The AI and ML researchers at The University of Texas at Austin,
              led by the Machine Learning Lab (MLL) and Good Systems, look
              forward to working closely with members of the AI Alliance to
              broaden access to generative AI for the purpose of accelerating
              research. We are excited about exploring ways to leverage its
              benefits, safeguard against AI dangers while simultaneously
              advancing the state of the art in AI capabilities.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Prof. Hiroaki Aihara, Executive Vice President of the University
                of Tokyo:{' '}
              </strong>
              “The University Tokyo is thrilled to be part of the AI Alliance,
              together to support open innovation and open science in AI for the
              benefit of society at large.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Jeffrey Brock, Dean of the Yale School of Engineering & Applied
                Science:{' '}
              </strong>
              “We are excited to join the AI Alliance as a founding partner. Its
              commitment to innovative and open AI development aligns with our
              vision at Yale Engineering. This partnership enables us to work
              with a broad range of university and industry leadership to pursue
              collaborative research, while formulating policy and standards for
              safe, explainable, and trustworthy AI.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>Kenny Song, CTO, Citadel AI: </strong>
              “Citadel AI builds tools to validate and monitor the quality of AI
              systems, including our open-source LLM evaluation toolkit,
              LangCheck. We’re excited to contribute to the AI Alliance and
              advance our shared mission of making the world’s AI systems more
              reliable.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>
                Jinjun Xiong, Empire Innovation Professor of CSE, Director of
                Institute for Artificial Intelligence and Data Science, and
                Scientific Director of the National AI Institute for Exceptional
                Education at University at Buffalo (UB):{' '}
              </strong>
              “The recent resurgent interests in AI is a clear demonstration of
              the power of open research and the close collaboration between
              industry and academia. UB is proud to be part of the AI Alliance
              as a founding member to achieve its noble goals of democratizing
              the access of AI through open innovation, and to ensure the
              advancement of AI will benefit everyone in our society in a safe,
              responsible, and equitable way.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>Travis Addair, Co-Founder and CTO, Predibase: </strong>
              “At Predibase, we strongly believe that the future of AI will be
              built upon smaller, faster, and cheaper open source models
              fine-tuned for specific tasks, and that open source will play a
              key role in democratizing AI in the coming years. Empowering
              organizations to build and deploy their own AI models will prevent
              AI from concentrating in the hands of a few large, well-resourced
              tech companies. Developing in the open is the only way to ensure
              that AI is built for the benefit of everyone.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>Charles Xie, CEO of Zilliz: </strong>
              “Supporting the development of open-source models and fostering an
              ecosystem of choices empowers responsible AI usage. Safe AI is
              pivotal, ensuring AI’s positive impact while upholding
              explainability, ethics, and accessibility. We believe that vector
              databases are the backbone of enabling Safe AI. The AI Alliance
              represents an important step toward paving the path to safe and
              impactful AI innovation.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>Sridhar Ramaswamy, Snowflake SVP of AI: </strong>
              “By joining a diverse and global set of organizations working
              across all aspects of AI research, development, education, and
              governance, Snowflake is excited to help shape the future of
              responsible AI,” said Sridhar Ramaswamy, Snowflake’s SVP, AI. “As
              AI becomes a critical part of every industry within the Snowflake
              Data Cloud, we are committed to collaborating with a holistic team
              of developers, scientists across companies and academic
              institutions to proactively address concerns around security,
              governance and safety in AI.”
            </motion.blockquote>
            <motion.blockquote {...showInView}>
              <strong>Ann Lavin, VP of Central Policy, Uber: </strong>
              “The open source development of technology has long driven
              innovation. The AI Alliance recognizes the importance of
              continuing to support open source, as well as sharing the
              principles and practices necessary for responsible development.
              We’re looking forward to partnering with this broad set of experts
              to advance AI ethically and democratically.”
            </motion.blockquote>
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
