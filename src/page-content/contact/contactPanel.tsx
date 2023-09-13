import React from 'react';
import { Column, Heading } from '@carbon/react';
import Shape1b from '@graphics/shape1b.svg';

import styles from './contactPanel.module.scss';

const ContactPanel: React.FC<{ withBackground?: boolean }> = ({
  withBackground = true,
}) => {
  return (
    <>
      <Column xlg={{ span: 7, offset: 1 }} lg={5} md={8} sm={4}>
        <Heading className={styles.innerHeading}>
          Join the
          <br />
          AI Alliance
        </Heading>
      </Column>
      <Column
        className={styles.contactForm}
        xlg={{ span: 8, offset: 8 }}
        lg={{ span: 9, offset: 7 }}
        md={6}
        sm={4}
      >
        <div>{/* TODO Contact form */}</div>
      </Column>

      {withBackground ? (
        <div className={styles.footerGraphics}>
          <Shape1b />
        </div>
      ) : null}
    </>
  );
};

export default ContactPanel;
