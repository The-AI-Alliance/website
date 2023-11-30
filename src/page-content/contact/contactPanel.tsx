import React, { RefObject } from 'react';
import classnames from 'classnames';
import { AnimationProps, motion } from 'framer-motion';
import { Column, Grid, Heading, Section } from '@carbon/react';
import Shape1b from '@graphics/shape1b.svg';
import Shape1r from '@graphics/shape1r.svg';
import ContactForm from '@components/contactForm/contactForm';
import useSendEmail from '../../utils/useSendEmail';
import Ball from '@components/ball/ball';

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
  className?: string;
  background?: 'straight' | 'tilted' | 'none';
  graphicsRef?: RefObject<HTMLDivElement>;
  staticBall?: boolean;
}> = ({ className, background = 'none', graphicsRef, staticBall }) => {
  const { emailSent, enabled, sendMail } = useSendEmail();

  return enabled ? (
    <Section className={styles.wrapper}>
      <Grid>
        <Column
          className={styles.titleColumn}
          xlg={{ span: 6, offset: 1 }}
          lg={6}
          md={5}
          sm={3}
        >
          <Heading className={styles.innerHeading}>
            Learn more about the AI Alliance
          </Heading>
          {background === 'straight' ? (
            <div className={styles.titleGraphics} ref={graphicsRef}>
              {staticBall ? <Ball className={styles.ball} /> : null}
              <Shape1r />
            </div>
          ) : null}
        </Column>
        <Column
          className={classnames(
            styles.contactForm,
            styles[`contactForm--bcg-${background}`],
            className,
          )}
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
              <motion.p
                variants={confirmMessageVariants}
                initial="hidden"
                animate="shown"
              >
                Your message was sent. Thank you!
              </motion.p>
            </motion.div>
          ) : null}
          <ContactForm onSubmit={sendMail} />
        </Column>

        {background === 'tilted' ? (
          <div className={styles.footerGraphics} ref={graphicsRef}>
            <Shape1b />
          </div>
        ) : null}
      </Grid>
    </Section>
  ) : null;
};

export default ContactPanel;
