import React from 'react';
import { AnimationProps, motion } from 'framer-motion';
import { Column, Heading } from '@carbon/react';
import Shape1b from '@graphics/shape1b.svg';
import ContactForm from '@components/contactForm/contactForm';
import useSendEmail from '../../utils/useSendEmail';

import styles from './contactPanel.module.scss';

const confirmVariants: AnimationProps['variants'] = {
  hidden: { opacity: 0 },
  shown: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.4,
    },
  },
};

const confirmMessageVariants = {
  hidden: { top: -15 },
  shown: {
    top: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.6,
    },
  },
};

const ContactPanel: React.FC<{
  withBackground?: boolean;
}> = ({ withBackground = true }) => {
  const { emailSent, enabled, sendMail } = useSendEmail();

  return enabled ? (
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
        lg={{ span: 8, offset: 7 }}
        md={8}
        sm={4}
      >
        {emailSent ? (
          <motion.div
            className={styles.emailSent}
            variants={confirmVariants}
            initial="hidden"
            animate="shown"
          >
            <motion.div
              variants={confirmMessageVariants}
              initial="hidden"
              animate="shown"
            >
              Your message was sent. Thank you!
            </motion.div>
          </motion.div>
        ) : null}
        <ContactForm onSubmit={sendMail} />
      </Column>

      {withBackground ? (
        <div className={styles.footerGraphics}>
          <Shape1b />
        </div>
      ) : null}
    </>
  ) : null;
};

export default ContactPanel;
