import { useCallback, useContext, useState } from 'react';
import FeatureFlagsContext from './featureFlagsContext';
import EmailParams from '@types/emailParams';
import { useNotification } from './useNotification';

const useSendEmail = () => {
  const { contactForm } = useContext(FeatureFlagsContext);
  const [emailSent, setEmailSent] = useState(false);
  const { setNotification } = useNotification();

  const sendMail = useCallback(
    async (params: EmailParams) => {
      try {
        const response = await fetch('/api/send-mail', {
          method: 'POST',
          body: JSON.stringify(params),
        });
        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
        }
        setEmailSent(true);
      } catch (e) {
        setNotification?.({
          kind: 'error',
          title: "Your message couldn't be sent.",
          subtitle: 'Plesae, try again later.',
          autoClose: 5000,
          lowContrast: true,
        });
      }
    },
    [setNotification],
  );

  return {
    emailSent,
    enabled: contactForm,
    sendMail,
  };
};

export default useSendEmail;
