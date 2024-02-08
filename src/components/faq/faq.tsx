import { FC, ReactNode } from 'react';
import { Accordion, AccordionItem } from '@carbon/react';
import { motion } from 'framer-motion';
import { showInView } from '@utils/showInView';

import styles from './faq.module.scss';

const AnimatedItem: React.FC<{
  children: ReactNode;
  custom?: number;
  title: string;
}> = ({ children, custom, title }) => {
  return (
    <motion.div {...showInView} custom={custom}>
      <AccordionItem title={title}>{children}</AccordionItem>
    </motion.div>
  );
};

const fadeInFactor = 0.15;

const Faq: FC = () => {
  return (
    <Accordion className={styles.faq}>
      <AnimatedItem title="What is the AI Alliance?" custom={fadeInFactor}>
        <p>
          The AI Alliance is an international community of researchers,
          developers and organizational leaders committed to support and enhance
          open innovation across the AI technology landscape to accelerate
          progress, improve safety, security and trust in AI, and maximize
          benefits to people and society everywhere.
        </p>
        <p>
          Members of the AI Alliance believe that open innovation is essential
          to develop and achieve safe and responsible AI that benefit society
          rather than benefit a select few big players.
        </p>
      </AnimatedItem>

      <AnimatedItem
        title="What is the intent of the AI Alliance?"
        custom={2 * fadeInFactor}
      >
        <p>
          The AI Alliance is designed to create opportunities everywhere through
          a diverse range of institutions that can shape the evolution of AI in
          ways that better reflect the needs and the complexity of our
          societies.
        </p>
        <p>
          The AI Alliance is focused on fostering an open community and enabling
          developers and researchers to accelerate responsible innovation in AI
          while ensuring scientific rigor, trust, safety, security, diversity
          and economic competitiveness. By bringing together leading developers,
          scientists, academic institutions, companies, and other innovators, we
          will pool resources and knowledge to address safety concerns while
          providing a platform for sharing and developing solutions that fit the
          researchers, developers, and adopters around the world.
        </p>
      </AnimatedItem>

      <AnimatedItem
        title="Who is currently part of the AI Alliance?"
        custom={3 * fadeInFactor}
      >
        <p>
          To ensure open innovation in AI benefits everyone and that it is built
          responsibly, the AI Alliance consists of a broad range of
          organizations that are working across aspects of AI education,
          research, development and deployment, and governance.
        </p>
        <p>We are:</p>
        <ul>
          <li>
            The creators of the tooling driving AI benchmarking, trust and
            validation metrics and best practices, and application creation such
            as MLPerf, Hugging Face, LangChain, LlamaIndex, and open-source AI
            toolkits for <a href="http://aix360.res.ibm.com/">explainability</a>
            , <a href="https://aip360.res.ibm.com/">privacy</a>,{' '}
            <a href="https://github.com/Trusted-AI/adversarial-robustness-toolbox">
              adversarial robustness
            </a>
            , and <a href="https://aif360.res.ibm.com/">fairness</a>{' '}
            <a href="https://research.facebook.com/publications/casual-conversations-v2-designing-a-large-consent-driven-dataset-to-measure-algorithmic-bias-and-robustness/">
              evaluation
            </a>
            .
          </li>
          <li>
            The universities and science agencies that educate and support
            generation after generation of AI scientists and engineers and push
            the frontiers of AI research through open science.
          </li>
          <li>
            The builders of the hardware and infrastructure that supports AI
            training and applications – from the needed GPUs to custom AI
            accelerators and cloud platforms.
          </li>
          <li>
            The champions of frameworks that drive platform software including
            PyTorch, Transformers, Diffusers, Kubernetes, Ray, Hugging Face Text
            generation inference and Parameter Efficient Fine Tuning.
          </li>
          <li>
            The creators of some of today’s most used open models including
            Llama2, Stable Diffusion, StarCoder, Bloom, and many others.
          </li>
        </ul>
        <p>
          <a href="./members">Meet our members →</a>
        </p>
      </AnimatedItem>

      <AnimatedItem
        title="What do members contribute?"
        custom={4 * fadeInFactor}
      >
        <p>
          AI Alliance members plan to start or enhance projects that meet the
          following objectives:
        </p>
        <ul>
          <li>
            Deploy benchmarks, tools, and other resources that enable the
            responsible development and use of AI systems at global scale,
            including the creation of a catalog of vetted safety, security and
            trust tools. Support the advocacy and enablement of these tools with
            the developer community for model and application development.
          </li>
          <li>
            Responsibly advance the ecosystem of open foundation models with
            diverse modalities, including highly capable multilingual,
            multi-modal, and science models that can help address society-wide
            challenges in climate, human health, and beyond.
          </li>
          <li>
            Foster a vibrant AI hardware accelerator ecosystem by boosting
            contributions and adoption of essential enabling software
            technology.
          </li>
          <li>
            Support global AI skills building, education, and exploratory
            research. Engage the academic community to support researchers and
            students to learn and contribute to essential AI model and tool
            research projects.
          </li>
          <li>
            Develop educational content and resources to inform the public
            discourse and policymakers on benefits, risks, solutions and
            precision regulation for AI.
          </li>
          <li>
            Launch initiatives that encourage open development of AI in safe and
            beneficial ways, and host events to explore AI use cases and
            showcase how Alliance members are using open technology in AI
            responsibly and for good.
          </li>
        </ul>
      </AnimatedItem>

      <AnimatedItem
        title="How will the AI Alliance work?"
        custom={5 * fadeInFactor}
      >
        <p>
          The AI Alliance will begin its work with the formation of
          member-driven working groups across all major topical areas listed
          above. The Alliance will also establish a governing board and
          technical oversight committee dedicated to advancing the above project
          areas, as well as establishing overall project standards and
          guidelines.
        </p>
        <p>
          In addition to bringing together leading developers, scientists,
          academics, students, and business leaders in the field of artificial
          intelligence, the AI Alliance will plan to partner with important
          existing initiatives from governments, non-profit and civil society
          organizations who are doing valuable and aligned work in the AI space.
        </p>
      </AnimatedItem>

      <AnimatedItem
        title="Why is open innovation essential in AI?"
        custom={6 * fadeInFactor}
      >
        <p>
          To date, some of the most exciting progress in AI has been driven by
          collaborative and open research and development: from data and
          developer frameworks, to models and model cards, to conferences and
          papers with code. And, this approach benefits everyone – industry,
          academia, and society.
        </p>
        <ul>
          <li>
            Democratizes access to the most foundational and broadly applicable
            advances;
          </li>
          <li>Harnesses the innovative talent of the global community;</li>
          <li>Ensures accountability among individuals and companies;</li>
          <li>
            Instills trust from transparency by demystifying technical
            innovation for both the public and policymakers; and
          </li>
          <li>
            Better enables robust testing and validation through broad-based
            community approaches.
          </li>
        </ul>
        <p>
          Overall, open innovation in AI greatly assists in commercialization,
          adoption, and value generation for both technology providers and
          consumers.
        </p>
      </AnimatedItem>

      <AnimatedItem
        title="Can an organization join the AI Alliance? How?"
        custom={7 * fadeInFactor}
      >
        <p>
          The Alliance will continue to welcome new members who share our
          commitment to values and principles that will advance safe and
          responsible AI rooted in open innovation. Members of the AI Alliance
          are committed to:
        </p>
        <ul>
          <li>
            Bringing together a critical mass of compute, data, tools, and
            talent to accelerate open innovation in AI to build and support open
            technologies across software, models and tools;
          </li>
          <li>
            Enable students, developers and scientists to understand,
            experiment, and adopt open technologies; and
          </li>
          <li>
            Advocate for the value of open innovation with organizational and
            societal leaders, policy and regulatory bodies, and the public.
          </li>
        </ul>
        <p>
          Our program is purposefully designed to enable flexible levels of
          collaboration and contribution to maximize the participation and
          impact of organizations and individuals globally.
        </p>
        <p>
        Members of the AI Alliance must meet these 4 criteria categories:
        </p>
        <ul>
          <li>
          Alignment with the AI Alliance’s values and its mission to cultivate safe and open science and innovation
          </li>
          <li>
          Commitment to undertake significant projects aligned with the mission of the AI Alliance

          </li>
          <li>
          Contribution to the diversity of perspectives within the AI Alliance
          </li>
          <li>
          Activity and reputation within the wider communities of AI builders, advocates, and educators
          </li>
        </ul>
      </AnimatedItem>
    </Accordion>
  );
};

export default Faq;
