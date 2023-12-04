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
              Technology Developers, Researchers, and Adopters Collaborating
              Together to Advance Open, Safe, Responsible AI
            </motion.h2>
            <motion.p className={styles.abstract}>
              IBM and Meta Launch the AI Alliance in collaboration with over 50
              Founding Members and Collaborators globally including AMD,
              Anyscale, CERN, Cerebras, Cleveland Clinic, Cornell University,
              Dartmouth College, Dell Technologies, EPFL, ETH, Hugging Face,
              Imperial College London, Intel, INSAIT, Linux Foundation,
              MLCommons, MOC Alliance operated by Boston University and Harvard
              University, NASA, NSF, Oracle, Partnership on AI, Red Hat,
              Roadzen, ServiceNow, Sony Group, Stability AI, University of
              California Berkeley, University of Illinois, University of Notre
              Dame, The University of Tokyo, Yale University and others
            </motion.p>
            <section>
              <motion.p {...showInView}>
                AI advancements are leading to new opportunities that can
                improve how we work, live, learn and interact with one another.
                Open and transparent innovation is essential to empower a broad
                spectrum of AI researchers, builders, and adopters with the
                information and tools needed to harness these advancements in
                ways that prioritize safety, diversity, economic opportunity and
                benefits to all.
              </motion.p>
              <motion.p {...showInView}>
                While there are many individual companies, start-ups,
                researchers, governments, and others who are committed to open
                science and open technologies and want to participate in the new
                wave of AI innovation, more collaboration and information
                sharing will help the community innovate faster and more
                inclusively, and identify specific risks and mitigate those
                risks before putting a product into the world.
              </motion.p>
              <motion.p {...showInView}>
                That is why today, we’re launching the{' '}
                <strong>AI Alliance</strong> – a group of leading organizations
                across industry, startup, academia, research and government
                coming together to support open innovation and open science in
                AI. The AI Alliance is action oriented and decidedly
                international, designed to create opportunities everywhere
                through a diverse range of institutions that can shape the
                evolution of AI in ways that better reflect the needs and the
                complexity of our societies.
              </motion.p>
              <motion.p {...showInView}>
                The AI Alliance is focused on fostering an open community and
                enabling developers and researchers to accelerate responsible
                innovation in AI while ensuring scientific rigor, trust, safety,
                security, diversity and economic competitiveness. By bringing
                together leading developers, scientists, academic institutions,
                companies, and other innovators, we will pool resources and
                knowledge to address safety concerns while providing a platform
                for sharing and developing solutions that fit the needs of
                researchers, developers, and adopters around the world.
              </motion.p>
              <motion.p {...showInView} className={styles.enlargeSpacing}>
                To do that, the AI Alliance plans to start or enhance projects
                that meet the following objectives:
              </motion.p>
              <ul>
                <motion.li {...showInView}>
                  Develop and deploy benchmarks and evaluation standards, tools,
                  and other resources that enable the responsible development
                  and use of AI systems at global scale, including the creation
                  of a catalog of vetted safety, security and trust tools.
                  Support the advocacy and enablement of these tools with the
                  developer community for model and application development.
                </motion.li>
                <motion.li {...showInView}>
                  Responsibly advance the ecosystem of open foundation models
                  with diverse modalities, including highly capable
                  multilingual, multi-modal, and science models that can help
                  address society-wide challenges in climate, education, and
                  beyond.
                </motion.li>
                <motion.li {...showInView}>
                  Foster a vibrant AI hardware accelerator ecosystem by boosting
                  contributions and adoption of essential enabling software
                  technology.
                </motion.li>
                <motion.li {...showInView}>
                  Support global AI skills building and exploratory research.
                  Engage the academic community to support researchers and
                  students to learn and contribute to essential AI model and
                  tool research projects.
                </motion.li>
                <motion.li {...showInView}>
                  Develop educational content and resources to inform the public
                  discourse and policymakers on benefits, risks, solutions and
                  precision regulation for AI.
                </motion.li>
                <motion.li {...showInView}>
                  Launch initiatives that encourage open development of AI in
                  safe and beneficial ways, and host events to explore AI use
                  cases and showcase how Alliance members are using open
                  technology in AI responsibly and for good.
                </motion.li>
              </ul>
            </section>
            <section>
              <motion.h3 {...showInView}>Who We Are</motion.h3>
              <motion.p {...showInView}>
                To ensure open innovation in AI benefits everyone and that it is
                built responsibly, the AI Alliance consists of a broad range of
                organizations that are working across aspects of AI education,
                research, development and deployment, and governance.
              </motion.p>
              <motion.p {...showInView} className={styles.enlargeSpacing}>
                We are:
              </motion.p>
              <ul>
                <motion.li {...showInView}>
                  The creators of the tooling driving AI benchmarking, trust and
                  validation metrics and best practices, and application
                  creation such as MLPerf, Hugging Face, LangChain, LlamaIndex,
                  and open-source AI toolkits for{' '}
                  <a href="http://aix360.res.ibm.com/">explainability</a>,{' '}
                  <a href="https://aip360.res.ibm.com/">privacy</a>,{' '}
                  <a href="https://github.com/Trusted-AI/adversarial-robustness-toolbox">
                    adversarial robustness
                  </a>
                  , and <a href="https://aif360.res.ibm.com/">fairness</a>{' '}
                  <a href="https://research.facebook.com/publications/casual-conversations-v2-designing-a-large-consent-driven-dataset-to-measure-algorithmic-bias-and-robustness/">
                    evaluation
                  </a>
                  .
                </motion.li>
                <motion.li {...showInView}>
                  The universities and science agencies that educate and support
                  generation after generation of AI scientists and engineers and
                  push the frontiers of AI research through open science.
                </motion.li>
                <motion.li {...showInView}>
                  The builders of the hardware and infrastructure that supports
                  AI training and applications – from the needed GPUs to custom
                  AI accelerators and cloud platforms.
                </motion.li>
                <motion.li {...showInView}>
                  The champions of frameworks that drive platform software
                  including PyTorch, Transformers, Diffusers, Kubernetes, Ray,
                  Hugging Face Text generation inference and Parameter Efficient
                  Fine Tuning.
                </motion.li>
                <motion.li {...showInView}>
                  The creators of some of today’s most used open models
                  including Llama2, Stable Diffusion, StarCoder, Bloom, and many
                  others.
                </motion.li>
              </ul>
              <motion.p {...showInView} className={styles.enlargeSpacing}>
                IBM and Meta are proud to co-launch the AI Alliance with leading
                organizations across industry, government and academia. Partners
                and collaborators include:
              </motion.p>
              <ul>
                <motion.li {...showInView}>A*STAR</motion.li>
                <motion.li {...showInView}>Aitomatic</motion.li>
                <motion.li {...showInView}>AMD</motion.li>
                <motion.li {...showInView}>Anyscale</motion.li>
                <motion.li {...showInView}>Cerebras</motion.li>
                <motion.li {...showInView}>CERN</motion.li>
                <motion.li {...showInView}>Cleveland Clinic</motion.li>
                <motion.li {...showInView}>Cornell University</motion.li>
                <motion.li {...showInView}>Dartmouth College</motion.li>
                <motion.li {...showInView}>Dell Technologies</motion.li>
                <motion.li {...showInView}>
                  Ecole Polytechnique Federale de Lausanne
                </motion.li>
                <motion.li {...showInView}>ETH Zurich</motion.li>
                <motion.li {...showInView}>Fast.ai</motion.li>
                <motion.li {...showInView}>Fenrir, Inc.</motion.li>
                <motion.li {...showInView}>FPT Software</motion.li>
                <motion.li {...showInView}>Hebrew University</motion.li>
                <motion.li {...showInView}>Hugging Face</motion.li>
                <motion.li {...showInView}>IBM</motion.li>
                <motion.li {...showInView}>Imperial College London</motion.li>
                <motion.li {...showInView}>
                  Indian Institute of Technology Bombay
                </motion.li>
                <motion.li {...showInView}>
                  Abdus Salam International Centre for Theoretical Physics
                  (ICTP)
                </motion.li>
                <motion.li {...showInView}>
                  Institute for Computer Science, Artificial Intelligence
                </motion.li>
                <motion.li {...showInView}>Intel</motion.li>
                <motion.li {...showInView}>Keio University</motion.li>
                <motion.li {...showInView}>LangChain</motion.li>
                <motion.li {...showInView}>LlamaIndex</motion.li>
                <motion.li {...showInView}>Linux Foundation</motion.li>
                <motion.li {...showInView}>
                  Mass Open Cloud Alliance, operated by Boston University and
                  Harvard
                </motion.li>
                <motion.li {...showInView}>Meta</motion.li>
                <motion.li {...showInView}>
                  Mohamed bin Zayed University of Artificial Intelligence
                </motion.li>
                <motion.li {...showInView}>MLCommons</motion.li>
                <motion.li {...showInView}>
                  National Aeronautics and Space Administration
                </motion.li>
                <motion.li {...showInView}>
                  National Science Foundation
                </motion.li>
                <motion.li {...showInView}>New York University</motion.li>
                <motion.li {...showInView}>NumFOCUS</motion.li>
                <motion.li {...showInView}>OpenTeams</motion.li>
                <motion.li {...showInView}>Oracle</motion.li>
                <motion.li {...showInView}>Partnership on AI</motion.li>
                <motion.li {...showInView}>Quansight</motion.li>
                <motion.li {...showInView}>Red Hat</motion.li>
                <motion.li {...showInView}>
                  Rensselaer Polytechnic Institute
                </motion.li>
                <motion.li {...showInView}>Roadzen</motion.li>
                <motion.li {...showInView}>Sakana AI</motion.li>
                <motion.li {...showInView}>SB Intuitions</motion.li>
                <motion.li {...showInView}>ServiceNow</motion.li>
                <motion.li {...showInView}>Simons Foundation</motion.li>
                <motion.li {...showInView}>Sony Group</motion.li>
                <motion.li {...showInView}>Stability AI</motion.li>
                <motion.li {...showInView}>Together AI</motion.li>
                <motion.li {...showInView}>TU Munich</motion.li>
                <motion.li {...showInView}>
                  UC Berkeley College of Computing, Data Science, and Society
                </motion.li>
                <motion.li {...showInView}>
                  University of Illinois Urbana-Champaign
                </motion.li>
                <motion.li {...showInView}>
                  The University of Notre Dame
                </motion.li>
                <motion.li {...showInView}>
                  The University of Texas at Austin
                </motion.li>
                <motion.li {...showInView}>The University of Tokyo</motion.li>
                <motion.li {...showInView}>Yale University</motion.li>
              </ul>
            </section>
            <section>
              <motion.h3 {...showInView}>
                How the AI Alliance Will Work
              </motion.h3>
              <motion.p {...showInView}>
                The AI Alliance will begin its work with the formation of
                member-driven working groups across all major topical areas
                listed above. The Alliance will also establish a governing board
                and technical oversight committee dedicated to advancing the
                above project areas, as well as establishing overall project
                standards and guidelines.
              </motion.p>
              <motion.p {...showInView}>
                In addition to bringing together leading developers, scientists,
                academics, students, and business leaders in the field of
                artificial intelligence, the AI Alliance will plan to partner
                with important existing initiatives from governments, non-profit
                and civil society organizations who are doing valuable and
                aligned work in the AI space.
              </motion.p>
            </section>
            <section>
              <motion.h3 {...showInView}>Member Quotes</motion.h3>

              <motion.blockquote {...showInView}>
                <strong>Arvind Krishna, IBM Chairman and CEO: </strong>
                “The progress we continue to witness in AI is a testament to
                open innovation and collaboration across communities of
                creators, scientists, academics and business leaders. This is a
                pivotal moment in defining the future of AI. IBM is proud to
                partner with like-minded organizations through the AI Alliance
                to ensure this open ecosystem drives an innovative AI agenda
                underpinned by safety, accountability and scientific rigor.”
              </motion.blockquote>

              <motion.blockquote {...showInView}>
                <strong>Nick Clegg, President, Global Affairs of Meta: </strong>
                “We believe it’s better when AI is developed openly – more
                people can access can access the benefits, build innovative
                products and work on safety. The AI Alliance brings together
                researchers, developers and companies to share tools and
                knowledge that can help us all make progress whether models are
                shared openly or not. We’re looking forward to working with
                partners to advance the state-of-the-art in AI and help everyone
                build responsibly.”
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
                benefits of responsible AI are broadly available. We are proud
                to join with other industry leaders as a founding member of the
                AI Alliance and look forward to working together to ensure the
                rapid advances in AI are a force for positive change.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>
                  Christopher Nguyen, CEO, Aitomatic & Industrial AI Leader:{' '}
                </strong>
                “AI independence is vital for industrial companies, focusing on
                specialized domain expertise as key to competitiveness.
                Open-source foundations, driven by the AI Alliance, are
                essential for seamless model deployment at the computing edge.
                Aitomatic and our partners are eager to both contribute to and
                benefit from the transformative impact of the global AI
                Alliance.”
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
                  Yannis Paschalidis, Distinguished Professor of ECE and
                  Director of the Hariri Institute for Computing and
                  Computational Science & Engineering at Boston University:{' '}
                </strong>
                “The Hariri Institute, which houses the multi-institutional Mass
                Open Cloud Alliance (MOC Alliance), is excited to have the MOC
                Alliance join the AI Alliance as a founding member. The MOC
                Alliance was formed to provide an affordable open cloud platform
                to the research community, thus furthering the goals of the
                Massachusetts Green High Performance Computing Center (MGHPCC)
                -- a joint venture of Boston University, Harvard, MIT,
                Northeastern, and UMass. The Hariri Institute has a history of
                supporting open-source efforts and is at the forefront of AI
                innovations with applications in science, biomedicine, and
                health care, where open, trusted, unbiased, and ethical AI
                models are particularly important.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>
                  Andrew Feldman, co-founder and CEO, Cerebras Systems:{' '}
                </strong>
                “Cerebras’ mission is to transform AI compute and democratize
                access to AI for customers around the world. In alliance with
                this community of global technology leaders, we look forward to
                accelerating the progress and contributions of the open source
                AI community in the most efficient, collaborative, and
                responsible way possible.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>
                  Tom Mihaljevic, M.D., Cleveland Clinic CEO and President, and
                  holder of the Morton L. Mandel CEO Chair:{' '}
                </strong>
                “We are pleased to become a founding member of the AI Alliance.
                As a leader in healthcare AI, we recognize that it has the
                potential to quickly accelerate the pace of medical research and
                enhance patient care. AI capabilities are now constantly growing
                and improving, and it is critical that organizations from
                diverse fields come together to help advance AI discoveries and
                technologies while also addressing concerns around security and
                safety. We are looking forward to working on these important
                issues collaboratively with the Alliance members.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>
                  Krystyn J Van Vliet, Vice President for Research and
                  Innovation at Cornell University{' '}
                </strong>
                “Cornell looks forward to participating in this AI Alliance, and
                to the range of participants and perspectives around this table.
                Open innovation has spurred incredible advances in many fields
                including AI and thrives on experimentation and dialogue. We
                look forward to contributing to the discussions, technologies,
                and advances that will help the world develop knowledge and
                tools using AI, as well as a shared sense of responsibility for
                positive impact on society.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>
                  Dave Kotz, Provost and the Pat and John Rosenwald Professor in
                  the Department of Computer Science, Dartmouth College:{' '}
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
                with open innovation and in open ecosystems. The AI Alliance is
                a positive step in making sure a diverse set of voices are
                collaborating transparently for the benefit of all.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>
                  Marcel Salathé & Pascal Frossard, co-directors of the EPFL AI
                  Center:{' '}
                </strong>
                “EPFL is committed to the open, transparent, and safe
                development of AI, recognizing its significance for everyone.
                Through global collaborations like the AI alliance, we aim to
                ensure that progress in AI technology is ethical, efficient, and
                universally beneficent.”
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
                “FPT Software is thrilled and honored to join the Alliance,
                where we believe that openness and transparency are key to
                ensuring the safe and responsible deployment of AI. Committed to
                this vision, we aim to work closely with various stakeholders to
                enhance open-science AI, ultimately bringing significant social
                benefits to the industry.”
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
                education, build robust frameworks, and advocate for policies
                that nurture a vibrant, open AI ecosystem. This alliance is a
                beacon illuminating our commitment to shaping a responsible,
                inclusive future powered by the boundless possibilities of
                artificial intelligence.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>Atish Dabholkar, ICTP Director: </strong>
                “ICTP is pleased to be part of the high-level, international
                research community underpinning the AI Alliance that includes
                major players in the field. We share a commitment to exploring
                new scientific horizons and to sharing new knowledge openly. AI
                has the potential to radically change the way science is done,
                and by joining this Alliance we will ensure that our large
                international network of scientists have open access to the
                latest in AI innovation, training and governance, regardless of
                geographical borders.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>
                  Professor Varsha Apte, Head, Department of Computer Science
                  and Engineering at IIT Bombay:{' '}
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
                essential for making AI trusted, responsible, transparent, as
                well as auditable. We look forward to engaging with the Alliance
                community to realise these objectives.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>
                  Professor Martin Vechev, Scientific Director of INSAIT, Full
                  Professor at ETH Zurich:{' '}
                </strong>
                “INSAIT is delighted to join the AI Alliance and help pave the
                way towards a more transparent, open, safe and trustworthy AI.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>
                  Deepak Patil, CVP and GM Intel Datacenter AI Solutions:{' '}
                </strong>
                “Intel has long supported the open ecosystem to drive innovation
                and the future of technology. The AI Alliance provides an
                opportunity for a broad community to come together to advance
                the future of artificial intelligence technologies including
                data sets, models and tools rooted in responsibility, ethics,
                trustworthy and security practices. By collaborating across the
                industry, the advancement of this technology can be driven
                forward with speed and transparency. We look forward to working
                with this diverse group to help shape an open, responsible AI
                ecosystem.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>Prof. Kohei Itoh, President, Keio University: </strong>
                “Keio University is excited to be a part of this new alliance
                that will play a key role in our contribution to expanding the
                horizon of computing by combining supercomputing, quantum
                computing, semiconductor, and AI research.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>
                  Jim Zemlin, Executive Director, Linux Foundation:{' '}
                </strong>
                “The AI Alliance is another milestone in the process of
                providing for openly shareable software, data, and other assets
                essential to the development of transparent, advanced and
                trustworthy AI. Open collaborative processes and open governance
                are essential to these efforts and working with our{' '}
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
                making sure that AI is understandable, explainable, and
                accessible to everyone. The mission of LlamaIndex is to empower
                all developers to connect LLMs with their private data. We
                support the development of open-source models and supporting
                tooling so that developers can take advantage of a strong
                ecosystem of different choices in achieving this mission.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>
                  Orran Krieger, Professor ECE and CS and Director of the Mass
                  Open Cloud Alliance (MOC Alliance):{' '}
                </strong>
                “The MOC Alliance is excited to have its open production cloud
                be a part of the Open AI Alliance. The AI Alliance’s mission of
                enabling AI in an open and transparent matter is an exciting
                match for a cloud based on open source with all the operations
                state and telemetry available to enable innovation. We hope to
                both be a cost-effective platform for many of the research and
                non-profit users that are part of the AI Alliance, as well as a
                place where AI Alliance participants who are developing new
                tools and platforms can expose their innovation to our large
                community of existing AI researchers/users.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>
                  Timothy Baldwin, Acting Provost, Mohamed bin Zayed University
                  of Artificial Intelligence (MBZUAI):{' '}
                </strong>
                “MBZUAI recognizes the transformative impact of collaborative
                efforts in fostering innovation. The open ecosystem cultivated
                by the alliance mirrors our core values, emphasizing principles
                such as scientific rigor, trust, ethics, transparency and
                responsibility. As one of the founding members, MBZUAI
                recognizes the transformative potential of foundation models and
                generative AI. Our recent launch of the Institute of
                Foundational Models solidifies our commitment to advancing
                academic research into foundational models with linguistic,
                visual, and biological capabilities and beyond. These models are
                driving transformation in industries as diverse as
                sustainability and healthcare. We are honored to be part of the
                AI Alliance, and we eagerly anticipate the collaborative strides
                we will make towards shaping a future where AI benefits people
                and society everywhere.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>David Kanter, MLCommons Executive Director: </strong>
                “MLCommons believes in collaborative engineering to build
                industry standard benchmarks and metrics to help drive AI
                forward in key areas such as performance and safety. We look
                forward to working with the AI Alliance in these areas to make
                all AI safer for everyone.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>Sethuraman Panchanathan, NSF Director: </strong>
                “The U.S. National Science Foundation is delighted to partner
                with the AI Alliance to meet our shared goals of supporting
                AI-driven discovery and innovation. The NAIRR pilot seeks to
                connect America’s broad and diverse research community with the
                resources needed to pursue the frontiers of AI in a safe,
                secure, and trustworthy manner. The resources and tools
                developed by the AI Alliance will strengthen and extend the
                NAIRR pilot’s ability to advance AI innovation in areas of
                societal and economic importance, ensuring the U.S. remains in
                the vanguard of competitiveness in this key technology.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>
                  Stacie Bloom, Chief Research Officer and Vice Provost for
                  Research, NYU:{' '}
                </strong>
                “NYU is excited about this opportunity to connect our world
                class AI research community with so many outstanding
                institutions including IBM and Meta. This Alliance aligns with
                our goals to drive science and technology solutions on a global
                scale, and in a way that is safe, responsible, accessible and
                equitable.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>Matt Hicks, president and CEO, Red Hat: </strong>
                “Collaboration and open innovation have always been true
                catalysts for progress. The launch of the AI Alliance marks a
                visionary milestone, uniting industry giants, academia, and
                innovators with a shared responsibility to shape the future and
                advance open innovation, ensuring that the transformative power
                of AI is harnessed responsibly and ethically. As a founding
                member of the AI Alliance, Red Hat recognizes the collective
                potential of an open, healthy AI community — a force that will
                not only build technologies but also advocate for a future where
                innovation knows no bounds.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>
                  Martin A. Schmidt, Ph.D., Rensselaer Polytechnic Institute
                  President:{' '}
                </strong>
                “Rensselaer Polytechnic Institute is honored to become a
                founding member of the AI Alliance. We believe the responsible
                application of artificial intelligence enables infinite
                possibilities in discovery and innovation. We look forward to
                collaborating with the alliance as we accelerate our work in
                artificial intelligence and quantum computing.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>Rohan Malhotra, CEO and Founder, Roadzen: </strong>
                The AI Alliance’s focus on fostering an open and diverse
                ecosystem is a pivotal step in advancing AI research worldwide.
                It’s a striking contrast to the idea of AI being tightly
                controlled by a few entities. As Roadzen joins this global
                initiative alongside the industry’s leaders and researchers, our
                commitment is twofold: to support this vision and to leverage
                our expertise in building AI that is not just groundbreaking but
                also safe, accessible, and beneficial for all.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>CJ Desai, president & COO, ServiceNow: </strong>
                “AI innovation must remain open to drive positive and equitable
                societal impact, foster continued progress, and address
                potential risks collaboratively. There is no room for a
                winner-take-all approach; the development of responsible, secure
                LLMs comes in many forms, By joining this alliance, ServiceNow
                is doubling down on open innovation, harnessing the collective
                talent and expertise across the global open-source community.
                This move aims to ensure AI development is grounded in the needs
                of society, both today and in the future.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>David Spergel, President, Simons Foundation: </strong>
                “The Simons Foundation is strongly committed to open codes, open
                data and open scientific literature. We have been long
                supporters of the arXiv, a key site for open science. We see
                this support of open source code for AI as essential for both
                advancing the science and enabling ethical use of AI.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>
                  Dr. Hiroaki Kitano, Senior Executive Vice President and CTO of
                  Sony Group Corporation{' '}
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
                “Stability AI, a leader in developing advanced open AI models,
                and IBM, a champion of open-source innovation, proudly announce
                our partnership with The AI Alliance. Together, we are poised to
                redefine the landscape of generative AI, focusing on
                breakthrough innovations with a steadfast commitment to trust
                and safety in this dynamic field.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>
                  Vipul Ved Prakash, Co-founder and CEO of Together AI:{' '}
                </strong>
                “We are excited to join the alliance because we believe in the
                power of the community and openness. This is the path to safe
                and responsible AI, and we are interested in building the
                platform to enable the open models community to thrive.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>Thomas F. Hofmann, TUM president: </strong>
                “With this alliance, we want to accelerate the development of
                responsible, socially acceptable and scalable AI solutions in
                partnership with other leading universities and companies.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>
                  Jennifer Chayes, Dean, UC Berkeley’s College of Computing,
                  Data Science, and Society:{' '}
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
                NSF AI Institutes, and numerous cross-sector partnerships, we
                are advancing research and workforce development to accelerate
                safe, responsible AI progress. UIUC is proud to join our
                esteemed peers and partners in this vital alliance.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>
                  University President Rev. John I. Jenkins, C.S.C., University
                  of Notre Dame:{' '}
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
                  Adam Klivans, Director, UT-Austin Machine Learning Lab{' '}
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
                  Prof. Hiroaki Aihara, Executive Vice President of the
                  University of Tokyo:{' '}
                </strong>
                “The University Tokyo is thrilled to be part of the AI Alliance,
                together to support open innovation and open science in AI for
                the benefit of society at large.”
              </motion.blockquote>
              <motion.blockquote {...showInView}>
                <strong>
                  Jeffrey Brock, Dean of the Yale School of Engineering &
                  Applied Science:{' '}
                </strong>
                “We are excited to join the AI Alliance as a founding partner.
                Its commitment to innovative and open AI development aligns with
                our vision at Yale Engineering. This partnership enables us to
                work with a broad range of university and industry leadership to
                pursue collaborative research, while formulating policy and
                standards for safe, explainable, and trustworthy AI.”
              </motion.blockquote>
            </section>
          </article>
        </Column>
      </Grid>
    </Section>
  </PageShell>
);

export default NewsPage;
