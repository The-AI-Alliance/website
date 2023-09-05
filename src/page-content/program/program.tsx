import React from 'react';
import { Column, Grid, Heading } from '@carbon/react';
import Footer from '@components/footer/footer';
import ContactPanel from '../contact/contactPanel';

import styles from './program.module.scss';

const ProgramPage: React.FC = () => {
  return (
    <Grid className={styles.program}>
      <Column xlg={{ span: 7, offset: 1 }} lg={7} md={8} sm={4}>
        <Heading className={styles.heading}>The program</Heading>
      </Column>
      <Column
        xlg={{ span: 8, offset: 8 }}
        lg={{ span: 9, offset: 7 }}
        md={6}
        sm={4}
      >
        <p>
          It is a pivotal time in AI. Recent progress in generative AI has led
          to new capabilities in language, code, and image generation.
        </p>
        <p>
          We’ve seen new applications and architectures, and the promise of
          advances across human productivity, health, climate and beyond. The
          industry has shifted into overdrive.
        </p>
        <p>
          Corporate strategies are shifting. AI startup valuations are spiking.
          Irrational exuberance and polarization over the benefits and risks of
          AI are prevalent in broader society. And a small group of
          currently-leading players is seeking to wall off competition through
          closed source and regulation.
        </p>
        <p>
          AI has advanced tremendously through open innovation. We think this
          should continue and is the best path for society, academia and
          industry. The AI community has a long history of open research and
          development, from data to models and model cards, to developer
          frameworks to conferences and papers with code. This has accelerated
          progress, benefiting everyone but also leaving plenty of value
          creation opportunities on the table for companies.
        </p>
        <p>
          Open-source AI democratizes access to the most foundational and
          broadly applicable advances; it harnesses the innovative talent of the
          global community; it makes individuals and companies more accountable,
          inculcates trust from transparency, demystifies innovation for the
          public and policymakers, and better enables robust testing and
          validation through broad-based community approaches.
        </p>
        <p>
          Overall, open-source AI greatly assists in commercialization, adoption
          and value generation for both vendors and consumers.
        </p>
      </Column>
      <ContactPanel />
      <Footer />
    </Grid>
  );
};

export default ProgramPage;
