import React from 'react';
import { Column, Grid, Heading } from '@carbon/react';
import Footer from '@components/footer/footer';
import ContactPanel from '../contact/contactPanel';

import styles from './partners.module.scss';

const PartnersPage: React.FC = () => {
  return (
    <Grid className={styles.partners}>
      <>
        <Column xlg={{ span: 7, offset: 1 }} lg={7} md={8} sm={4}>
          <Heading className={styles.heading}>
            Industry
            <br />
            partners
          </Heading>
        </Column>
        <Column
          xlg={{ span: 8, offset: 8 }}
          lg={{ span: 9, offset: 7 }}
          md={6}
          sm={4}
        >
          <p>
            Multiply human and technology resources, and prevent duplicative
            work, to build more capable and openly validated base models faster,
            more efficiently, and better than on their own.
          </p>
          <p>
            Neutralize proprietary advantage at the foundational level from
            certain competitors seeking to wall off their models and use
            regulatory capture to constrain innovation from others.
          </p>
          <p>
            Band together to ensure a healthy public narrative and reasonable
            regulation prevails, which is far better done coming from a group
            than individual companies.
          </p>
          <div className={styles.partnersList}>{/* TODO */}</div>
        </Column>
      </>

      <>
        <Column xlg={{ span: 7, offset: 1 }} lg={7} md={8} sm={4}>
          <Heading className={styles.heading}>
            Academic
            <br />
            partners
          </Heading>
        </Column>
        <Column
          xlg={{ span: 8, offset: 8 }}
          lg={{ span: 9, offset: 7 }}
          md={6}
          sm={4}
        >
          <p>
            Create a simple and clear industry framework for open versus
            proprietary data/models and technology: foundational AI is open,
            product / application-specific AI is is up to the owner.
          </p>
          <p>
            Shape and ensure your organization is at the leading edge of
            building on and deploying open frontier models in your products and
            services.
          </p>
          <p>
            Enable your customers to understand and embrace the value of open
            source AI.
          </p>
          <div className={styles.partnersList}>{/* TODO */}</div>
        </Column>
      </>

      <ContactPanel withBackground={false} />
      <Footer />
    </Grid>
  );
};

export default PartnersPage;
