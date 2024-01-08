import { useCallback, useContext, useState } from 'react';
import ContactFormParams from '@type/contactFormParams';
import FeatureFlagsContext from './featureFlagsContext';

const useSendEmail = () => {
  const { contactForm } = useContext(FeatureFlagsContext);
  const [emailSent, setEmailSent] = useState(false);

  const sendMail = useCallback(
    async (params: ContactFormParams) => {
      if (!contactForm?.email) return;

      const response = await fetch('/api/send-mail', {
        method: 'POST',
        body: JSON.stringify(params),
      });
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }
      setEmailSent(true);
    },
    [contactForm?.email],
  );

  return {
    enabled: !!contactForm?.email,
    emailSent,
    sendMail,
  };
};

export default useSendEmail;
