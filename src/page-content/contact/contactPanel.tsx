import React, { RefObject, useCallback, useMemo } from 'react';
import classnames from 'classnames';
import { AnimationProps, motion } from 'framer-motion';
import { Column, Grid, Heading, Section } from '@carbon/react';
import Image from 'next/image';
import shape1b from '@graphics/shape1b.png';
import shape1r from '@graphics/shape1r.png';
import ContactForm, {
  ContactFormProps,
} from '@components/contactForm/contactForm';
import useSendEmail from '../../utils/useSendEmail';
import Ball from '@components/ball/ball';
import { showInView } from '@utils/showInView';
import useHubSpot from '@utils/useHubSpot';
import { useNotification } from '@utils/useNotification';

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
  const { setNotification } = useNotification();
  const { enabled: emailsConfigured, emailSent, sendMail } = useSendEmail();
  const {
    enabled: hubSpotConfigured,
    formSubmitted,
    submitContactForm,
  } = useHubSpot();

  const handleSubmitForm: ContactFormProps['onSubmit'] = useCallback(
    async params => {
      let partialSuccess = false;
      try {
        if (hubSpotConfigured) {
          await submitContactForm(params);
          partialSuccess = true;
        }

        emailsConfigured && (await sendMail(params));
      } catch (e) {
        partialSuccess
          ? console.error('Email was not sent:', e)
          : setNotification?.({
              kind: 'error',
              title: "Your message couldn't be sent.",
              subtitle: 'Plesae, try again later.',
              autoClose: 5000,
              lowContrast: true,
            });
      }
    },
    [
      emailsConfigured,
      hubSpotConfigured,
      sendMail,
      setNotification,
      submitContactForm,
    ],
  );

  const submitComplete = useMemo(
    () => emailSent || formSubmitted,
    [emailSent, formSubmitted],
  );

  const contactFormEnabled = useMemo(
    () => emailsConfigured || hubSpotConfigured,
    [emailsConfigured, hubSpotConfigured],
  );

  return contactFormEnabled ? (
    <Section className={styles.wrapper} level={1}>
      <Grid>
        <Column
          className={styles.titleColumn}
          xlg={{ span: 6, offset: 1 }}
          lg={6}
          md={5}
          sm={3}
        >
          <Heading className={styles.innerHeading}>
            <motion.span {...showInView}>
              Learn more about the AI Alliance
            </motion.span>
          </Heading>
          {background === 'straight' ? (
            <div className={styles.titleGraphics} ref={graphicsRef}>
              {staticBall ? <Ball className={styles.ball} /> : null}
              <Image className={styles.shape} src={shape1r} alt="" />
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
          {submitComplete ? (
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
          <ContactForm onSubmit={handleSubmitForm} />
        </Column>

        {background === 'tilted' ? (
          <div className={styles.footerGraphics} ref={graphicsRef}>
            <Image className={styles.shape} src={shape1b} alt="" />
          </div>
        ) : null}
      </Grid>
    </Section>
  ) : null;
};

export default ContactPanel;
