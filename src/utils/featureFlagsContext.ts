import { createContext } from 'react';

export type FeatureFlags = {
  contactForm?: {
    enabled: boolean;
    email: boolean;
    hubSpot: boolean;
  };
};

const FeatureFlagsContext = createContext<FeatureFlags>({});

export default FeatureFlagsContext;
