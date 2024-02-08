import { motion } from 'framer-motion';
import BlogPostData from './blogPostData';
import { showInView } from '@utils/showInView';

const blog: BlogPostData = {
  anchor: 'new-members',
  date: 'February 8, 2024',
  renderBody: styles => (
    <>
      <motion.h2 {...showInView}>
        AI Alliance Announces 25+ New Members, Launches AI Safety Tooling and AI
        Policy Working Groups to Enable Open, Safe, and Responsible AI for All
      </motion.h2>
      <motion.p className={styles.abstract}>
        New AI Alliance Members Include: Anaconda; Applied Digital; Citadel AI;
        Core42; Databricks; Domino Data Lab; ESADE, Hitachi; Institut
        Polytechnique De Paris; Impact AI; Kera Health Platforms; LastMile AI;
        Lightning AI; MLOps Community; NEC Corporation; New Native Inc.; Neo4j;
        Northeastern University; Predibase; SeedAI; Snowflake, Inc.; Uber;
        University at Buffalo; University of Pennsylvania; University of
        Technology in Poznan: Interdisciplinary Centre for Artificial
        Intelligence and Cybersecurity; University of Utah; Weights & Biases
        (ML/LLMops); and Zilliz
      </motion.p>
      <section>
        <motion.p {...showInView}>
          The AI Alliance, an international community of developers,
          researchers, and organizations dedicated to promoting open, safe and
          responsible artificial intelligence, today announced the addition of
          more than 20 new members, bringing together a diverse mix of academia,
          startups, enterprises, and scientific organizations from around the
          globe.
        </motion.p>
        <motion.p {...showInView}>
          The Alliance has also established its first two member-driven working
          groups, in AI Safety and Trust Tooling and AI Policy Advocacy to take
          immediate action in support of the organization’s mission. These
          groups convene researchers, developers, policy and industry experts to
          work together to comprehensively and openly address the challenges of
          generative AI and democratize its benefits.
        </motion.p>
        <motion.p {...showInView} className={styles.enlargeSpacing}>
          The <strong>AI Alliance AI Safety and Trust Tooling</strong> working
          group will:
        </motion.p>
        <ul>
          <motion.li {...showInView}>
            Provide objective information and best practice guidance on AI
            safety, trust, ethics, and cybersecurity through a showcase of
            tools, blogs, newsletters, and whitepapers.
          </motion.li>
          <motion.li {...showInView}>
            Improve the state of the art for models, datasets, and other tools
            that perform evaluation for sensitive data detection, model quality
            and alignment, and cybersecurity threats and remediation.
          </motion.li>
          <motion.li {...showInView}>
            Establish a definitive set of benchmarking capabilities for testing
            AI models and applications.
          </motion.li>
        </ul>
        <motion.p {...showInView} className={styles.enlargeSpacing}>
          The <strong>AI Alliance AI Policy Advocacy</strong> working group
          will:
        </motion.p>
        <ul>
          <motion.li {...showInView}>
            Create a public forum through events and online discourse that
            brings the technical community and policymakers together to address
            opportunities and barriers for open innovation in AI.
          </motion.li>
          <motion.li {...showInView}>
            Publish and disseminate information and opinion from AI Alliance
            members on key policy topics, including red teaming, regulation on
            applications, and access to hardware.
          </motion.li>
          <motion.li {...showInView}>
            Represent the voices of the broader AI ecosystem reliant on open
            source and open innovation before policymakers.
          </motion.li>
        </ul>
        {/* <motion.p {...showInView} className={styles.enlargeSpacing}>
          Newly announced AI Alliance members include:
        </motion.p>
        <motion.p {...showInView}>
        <img src="https://thealliance.ai/news/members_map.svg" alt="AI Alliance members map"/>
        </motion.p> */}
        <motion.p {...showInView} className={styles.enlargeSpacing}>
          The AI Alliance, which launched in December 2023, emphasizes the
          importance of open technologies and encourages the adoption of these
          advancements across industry, academia, and government. By advocating
          for open innovation with leaders across industry and government, the
          AI Alliance seeks to foster an environment where AI can thrive and
          benefit people and society everywhere.
        </motion.p>
        <motion.blockquote {...showInView}>
          <strong>Barry Libert, CEO, Anaconda: </strong>
          “This journey is more than AI—it’s the shared pursuit for a future
          guided by scientific curiosity, relentless innovation, and boundless
          access in which technology uplifts businesses and society to the
          highest standards of integrity and responsibility. Anaconda is fully
          committed to advancing AI transformation, and participating in the AI
          Alliance mission is a strategic leap forward in this endeavor. This
          partnership will combine our expertise in open-source data science
          with the collaborative power of this esteemed community.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>Wes Cummins, CEO, Applied Digital (APLD): </strong>
          “Open innovation propels responsible and equitable progress in
          artificial intelligence, fostering collaboration among diverse
          entities. Applied Digital leads with state-of-the-art low-cost digital
          infrastructure, strategically placing data centers at the power
          generation source for high-performance computing applications. Our
          commitment to the AI Alliance aligns seamlessly with our mission,
          championing responsible AI development and sustainability through
          collaborative efforts with industry leaders, academia, and
          government.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>Kenny Song, Co-Founder & CTO, Citadel AI: </strong>
          “Citadel AI builds tools to validate and monitor the quality of AI
          systems, including our open-source LLM evaluation toolkit, LangCheck.
          We’re excited to contribute to the AI Alliance and advance our shared
          mission of making the world’s AI systems more reliable.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>
            Talal Al Kaissi, EVP and Chief Product and Global Partnerships
            Officer, Core42:{' '}
          </strong>
          “At Core42, our purpose is to accelerate what people, enterprises and
          nations can achieve with AI. Joining the AI Alliance allows us to
          partner with global technology leaders to mold the future of AI while
          collaborating openly and sharing knowledge, tools, and resources. By
          doing so, we aim to expedite our collective progress and guarantee
          that the benefits of AI reach everyone in a manner that is ethical and
          inclusive.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>Naveen Rao, VP of Generative AI, Databricks:</strong>
          “At Databricks, we’re committed to open source innovation in AI. We
          believe innovation accelerates when researchers share ideas through
          open source. We’re the original creators of MLflow, one of the most
          popular open source AI tools, and we’re carrying on that legacy with
          Mosaic AI, including open AI models. We’re excited to join the AI
          Alliance and further its mission to support and enhance open
          innovation across the AI landscape. Together, we’ll accelerate
          progress, improve safety, security, and trust in AI, and maximize
          benefits to people and society everywhere.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>Nick Elprin, CEO and co-founder of Domino Data Lab: </strong>
          “The AI Alliance embodies the principles of openness, flexibility, and
          responsibility that guide the world’s top AI innovators. We’re proud
          to support these innovators together, ensuring AI’s benefits are both
          far-reaching and responsibly realized.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>
            Ivan Bofarull, Chief Innovation Officer, ESADE (Business & Law
            School):
          </strong>
          At ESADE, we firmly believe that the integration of AI in higher
          education holds the potential to catalyze a transformation extending
          beyond technology. AI presents an opportunity to reimagine from
          scratch the fundamental value of education and learning, reassess the
          efficacy and impact of educational outcomes, and elevate the standards
          of decision-making and judgment, particularly in domains such as
          management and law. Furthermore, the advent of AI will compel academic
          institutions to accentuate the elements we aim to preserve and
          reinforce each university’s distinct purpose. We are enthusiastic
          about actively participating in this collaborative ecosystem,
          contributing to this ongoing journey of transformation.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>
            Itaru Nishizawa, Vice President & CTO, Hitachi, Ltd.:{' '}
          </strong>
          “Hitachi is leading the application of AI in industry and society, and
          the responsible deployment of AI technology is deeply embedded in our
          culture, providing a steadfast underpinning to the development of AI
          technologies. We are pleased to join the AI Alliance open innovation
          ecosystem to work together with our partners to further the adoption
          of these transformative technologies across different societal sectors
          in a reliable, responsible, and ethical manner.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>Christophe Lienard, President, Impact AI: </strong>
          “At Impact AI, our mission is to share cutting-edge insights on
          artificial intelligence, promote the adoption of trustworthy AI, and
          raise awareness about the ethical challenges it presents. We are
          strong advocates for an industrial approach to AI, emphasizing the
          responsible deployment of AI technologies across European
          organizations and ensuring broad accessibility to its transformative
          tools. In line with these values, we wholeheartedly support the
          Alliance’s efforts to build an open technology ecosystem. This
          commitment to fostering diversity and innovation is crucial for the
          development of AI solutions that are not only advanced but also
          ethical and accessible to all. Through our support for the AI
          Alliance, we wish to contribute to a positive future where AI serves
          as a force for good, enhancing societal well-being and driving
          sustainable growth.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>
            Moustapha Cisse, Founder and CEO, Kera Health Platforms:{' '}
          </strong>
          "Artificial intelligence’s full promise hinges on open knowledge. Open
          source is our gateway to a future where collective innovation benefits
          everyone, everywhere."
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>Andrew Hoh, President and Co-Founder of LastMile AI: </strong>
          “Machine Learning and Artificial Intelligence has only been able to
          flourish through the collaborative nature of the open source
          community. As such, the AI Alliance represents the acknowledgement and
          continued trust in the open source community to further innovation
          within the domain. LastMile AI is proud to contribute back to the AI
          Alliance and the open-source community to enable a better Gen AI
          development experience. We believe that through open-source, the
          technology can maintain its speed of innovation while building trust
          through transparency.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>Luca Antiga, Chief Technology Officer, Lightning AI: </strong>
          “Lightning AI is strongly aligned with the ideals of the AI Alliance.
          Through open source, we believe the best minds in the AI community can
          come together to address the concerns stemming from the AI revolution
          and enable a world that optimizes its infinite benefits.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>Demetrios Brinkmann, Founder, MLOps Community: </strong>
          “With the advent of AI adoption around the globe, we must ensure that
          the continued innovation is for all. The MLOps Community feels
          strongly about the need for Open Source AI in every facet whether in
          the tooling supporting models or the models themselves. We are excited
          to join other trailblazers in the field and be part of the AI
          Alliance.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>Philip Rathle, CTO, Neo4j: </strong>
          “As the graph database and analytics leader, Neo4j has championed open
          innovation since day one, driven by the belief that powerful
          horizontal technologies in the hands of community co-innovators yield
          extraordinary outcomes. Our open-source developer roots and track
          record underscore how deeply we value the transformative power of open
          collaboration. We’re proud to be part of the AI Alliance in tackling
          AI’s challenges while pushing the boundaries of what’s possible in
          ways that are collaborative, innovative, and beneficial for humanity.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>
            Ricardo Baeza-Yates, Director of Research, Institute for
            Experiential AI, Northeastern University:{' '}
          </strong>
          “OSS is crucial for the advancement of science and technology, and
          there are many proof points, from Linux and Hadoop to current
          open-language models.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>Travis Addair, Co-Founder & CTO, Predibase: </strong>
          “At Predibase, we strongly believe that the future of AI will be built
          upon smaller, faster, and cheaper open-source models fine-tuned for
          specific tasks and that open source will play a key role in
          democratizing AI in the coming years. Empowering organizations to
          build and deploy their own AI models will prevent AI from
          concentrating in the hands of a few large, well-resourced tech
          companies. Developing in the open is the only way to ensure that AI is
          built for the benefit of everyone.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>Austin Carson, Founder & President, SeedAI: </strong>
          “Open-source AI research and technology is a key driver of responsible
          AI that serves the public. We’re excited to join the AI Alliance and
          work with the brilliant folks involved. We believe this is a group
          that shares our dedication to building technology and policy solutions
          that ensure that open-source AI continues living up to its legacy.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>Sridhar Ramaswamy, SVP of AI, Snowflake: </strong>
          “By joining a diverse and global set of organizations working across
          all aspects of AI research, development, education, and governance,
          Snowflake is excited to help shape the future of responsible AI. As AI
          becomes a critical part of every industry within the Snowflake Data
          Cloud, we are committed to collaborating with a holistic team of
          developers and scientists across companies and academic institutions
          to proactively address concerns around security, governance, and
          safety in AI.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>Ann Lavin, VP of Central Policy, Uber: </strong>
          “The open-source development of technology has long driven innovation.
          The AI Alliance recognizes the importance of continuing to support
          open source, as well as sharing the principles and practices necessary
          for responsible development. We’re looking forward to partnering with
          this broad set of experts to advance AI ethically and democratically.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>
            Jinjun Xiong, Empire Innovation Professor of CSE, Director of
            Institute for Artificial Intelligence and Data Science, and
            Scientific Director of the National AI Institute for Exceptional
            Education, University at Buffalo:{' '}
          </strong>
          “The recent resurgent interest in AI is a clear demonstration of the
          power of open research and the close collaboration between industry
          and academia. UB is proud to be part of the AI Alliance as a founding
          member to achieve its noble goals of democratizing the access of AI
          through open innovation, and to ensure the advancement of AI will
          benefit everyone in our society in a safe, responsible, and equitable
          way.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>
            Rajeev Alur, Zisman Family Professor of Computer and Information
            Science and Founding Director, ASSET Center, University of
            Pennsylvania:{' '}
          </strong>
          “Due to the proliferation of media stories about vulnerabilities and
          potential harm of AI, bridging the trust gap between developers of AI
          technology and skeptical users is critical to realize the promise of
          AI. AI Alliance, with its mission of bringing together industry and
          academia and its focus on transparency in innovation, can play a
          crucial role in bridging this gap. Penn Engineering’s recent
          initiative in Trustworthy AI — ASSET (AI-Enabled Systems: Safe,
          Explainable, and Trustworthy) Center, is perfectly aligned with this
          mission, and we are delighted to join the effort.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>
            Mitzi M. Montoya, Senior Vice President for Academic Affairs,
            University of Utah:{' '}
          </strong>
          “One of the great missions of the University of Utah is to impact our
          society for the better. As we launched the Responsible AI Initiative
          on our campus, we did so with an eye toward harnessing AI technology
          to solve societal problems. We seek to advance AI and its applications
          in ways that achieve societal good while also protecting privacy,
          civil rights and liberties and promoting accountability, transparency
          and equity. We know we cannot do this work in a vacuum and it is
          essential to work together with other leaders in the field. We are
          excited to join with the AI Alliance in finding ways to unlock
          solutions that affect our state, the nation, and the world.”
        </motion.blockquote>

        <motion.blockquote {...showInView}>
          <strong>Charles Xie, CEO, Zilliz: </strong>
          “Supporting the development of open-source models and fostering an
          ecosystem of choices empowers responsible AI usage. Safe AI is
          pivotal, ensuring AI’s positive impact while upholding explainability,
          ethics, and accessibility. We believe that vector databases are the
          backbone of enabling Safe AI. The AI Alliance represents an important
          step toward paving the path to safe and impactful AI innovation.”
        </motion.blockquote>
      </section>
    </>
  ),
};

export default blog;
