import { FC } from 'react';
import { Accordion, AccordionItem } from '@carbon/react';

import styles from './faq.module.scss';

const Faq: FC = () => {
  return (
    <Accordion className={styles.faq}>
      <AccordionItem title="What is the AI Alliance?">
        <p>
          The AI Alliance is an international community of researchers,
          developers and organizational leaders committed to support and enhance
          open innovation across the AI technology landscape to accelerate
          progress, and enhance safety, security and trust in AI to maximize
          benefits to people and society everywhere. Members of the AI Alliance
          believe that open innovation is essential to develop and achieve safe
          and responsible AI that benefit society rather than a select few big
          players.
        </p>
      </AccordionItem>
      <AccordionItem title="What is the intent of the AI Alliance?">
        <p>
          The AI Alliance is focused on accelerating and disseminating open
          innovation across the AI technology landscape to improve foundational
          capabilities, safety, security and trust in AI, and to responsibly
          maximize benefits to people and society everywhere.
        </p>
        <p>Alliance members intend to start or contribute to projects that:</p>
        <ul>
          <li>
            Support global AI skills building, education, and exploratory
            research.
          </li>
          <li>
            Create testing, validation and benchmarking tools and methodologies
            to advance safe, secure, trusted and ethical AI.
          </li>
          <li>
            Build and advance the most efficient and capable software frameworks
            and tools to enable AI model builders and GenAI application
            developers.
          </li>
          <li>
            Enable an ecosystem of open foundation models with diverse
            modalities, including highly capable multilingual, multi-modal, and
            science models.
          </li>
          <li>
            Foster a vibrant AI hardware accelerator ecosystem by boosting
            contributions and adoption of essential enabling software
            technology.
          </li>
          <li>
            Advocate for regulatory policies that create a healthy open
            ecosystem for AI.
          </li>
        </ul>
      </AccordionItem>
      <AccordionItem title="What do members contribute to the Alliance?">
        <p>
          AI Alliance members will actively contribute to one or more of the
          following areas:
        </p>
        <ul>
          <li>Tools for GenAI model building and application development</li>
          <li>An ecosystem of open models with diverse modalities</li>
          <li>Tools and processes for AI safety and alignment</li>
          <li>A vibrant AI hardware accelerator ecosystem</li>
          <li>Initiatives for AI skills education and exploratory research</li>
          <li>
            Advocacy for regulatory policies that create a healthy, safe open AI
            ecosystem.
          </li>
        </ul>
      </AccordionItem>
      <AccordionItem title="What is the Alliance’s immediate roadmap?">
        <p>
          The AI Alliance will begin its work with the formation of working
          groups with a focus on:
        </p>
        <ul>
          <li>
            Curating tools to help science, business and society develop safe,
            secure, trusted AI and advocating to and enabling developers to use
            them effectively for model and application development.
          </li>
          <li>
            Developing new tools, benchmarks and evaluation standards for model
            release and model deployment into applications.
          </li>
          <li>
            Developing educational content and resources to inform the public
            discourse and policymakers on benefits, risks, solutions and
            precision regulation for AI.
          </li>
          <li>
            Engaging the academic community to support researchers and students
            to learn and contribute to essential AI model and tool research
            projects.
          </li>
          <li>
            Launching events to explore AI use cases and showcase the many ways
            Alliance members are using open technology in AI responsibly and for
            good.
          </li>
        </ul>
        <p>
          The AI Alliance will also establish a governing board and technical
          oversight committee dedicated to advancing the above project areas, as
          well as establishing overall project standards and guidelines.
        </p>
      </AccordionItem>
      <AccordionItem title="Why open innovation is essential in AI?">
        <p>
          Some of the most exciting progress in AI has been driven by open
          research and development. For example, data and developer frameworks,
          models and model cards, and papers with code. This approach benefits
          everyone – industry, academia, and society. Benefits of open
          innovation include:
        </p>
        <ul>
          <li>
            Democratizing access to the most foundational and broadly applicable
            advances
          </li>
          <li>Harnessing the innovative talent of the global community</li>
          <li>Ensuring accountability among individuals and companies</li>
          <li>
            Instilling trust from transparency by demystifying technical
            innovation for both the public and policymakers; and
          </li>
          <li>
            Better enabling robust testing and validation through broad-based
            community approaches
          </li>
        </ul>
        <p>
          Overall, open innovation in AI greatly assists in commercialization,
          adoption, and value generation for both technology providers and
          consumers.
        </p>
      </AccordionItem>
      <AccordionItem title="What are foundation models?">
        <p>
          The next wave of innovation in AI is looking to replace the
          task-specific models that have dominated the current AI landscape. The
          future of AI is based on models that are trained on a broad set of
          unlabeled data with the ability to use these models on a wide range of
          different tasks. Only minimal fine tuning is required for some
          specialized applications.
        </p>
        <p>
          What makes these models &apos;foundational&apos; is that they provide
          the basis for a wide variety of applications of the AI model. Using
          self-supervised learning and transfer learning, the model can apply
          information it has learned about one situation to another.
        </p>
      </AccordionItem>
    </Accordion>
  );
};

export default Faq;
