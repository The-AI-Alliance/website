import { useCallback, useContext, useState } from 'react';
import FeatureFlagsContext from './featureFlagsContext';
import ContactFormParams from '@type/contactFormParams';

const useHubSpot = () => {
  const { contactForm } = useContext(FeatureFlagsContext);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const submitContactForm = useCallback(
    async (params: ContactFormParams) => {
      if (!contactForm?.hubSpot) return;

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        body: JSON.stringify(params),
      });
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }
      setFormSubmitted(true);
    },
    [contactForm?.hubSpot],
  );

  return {
    enabled: !!contactForm?.hubSpot,
    formSubmitted,
    submitContactForm,
  };
};

export default useHubSpot;
