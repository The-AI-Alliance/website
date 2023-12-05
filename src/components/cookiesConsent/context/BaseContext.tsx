import {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from 'react';
import { injectAgreedCookies } from '../helpers/Utils';
import { CookieTypes } from '../helpers/Types';

export type BaseContextType = {
  agreedCookies: CookieTypes[];
  expanded: boolean;
  handleSetAgreeCookies: (
    cookies: CookieTypes[],
    injectScript?: (cookie: string) => void,
  ) => void;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
  visible: boolean;
};

export const BaseContext = createContext<BaseContextType>({
  visible: false,
  agreedCookies: [],
  expanded: false,
  handleSetAgreeCookies: () => undefined,
  setExpanded: () => undefined,
  setVisible: () => undefined,
});

const BaseContextProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [agreedCookies, setAgreedCookies] = useState<CookieTypes[]>([]);
  const [expanded, setExpanded] = useState(false);

  const handleSetAgreeCookies = (
    cookies: CookieTypes[],
    injectScript?: (cookie: string) => void,
  ) => {
    if (injectScript) injectAgreedCookies(cookies, injectScript);
    setAgreedCookies(cookies);
  };

  return (
    <BaseContext.Provider
      value={{
        visible,
        agreedCookies,
        expanded,
        setVisible,
        handleSetAgreeCookies,
        setExpanded,
      }}
    >
      {children}
    </BaseContext.Provider>
  );
};

export default BaseContextProvider;
