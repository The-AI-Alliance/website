import { createContext } from 'react';

export type FeatureFlags = {
  contactForm?: boolean;
};

const FeatureFlagsContext = createContext<FeatureFlags>({});

export default FeatureFlagsContext;
