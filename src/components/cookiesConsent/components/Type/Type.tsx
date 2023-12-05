import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BaseContext } from '../../context/BaseContext';
import Toggle from '../Toggle';
import Dropdown from '../Dropdown';
import { TypeProps } from './Type.types';
import { CookieTypes } from '@components/cookiesConsent/helpers/Types';
import classNames from 'classnames';

import styles from './Type.module.scss';

const Type = ({
  cookie,
  className,
  onToggle,
  necessaryCookiesText,
  alwaysOnText,
}: TypeProps) => {
  const { agreedCookies } = useContext(BaseContext);
  const [expanded, setExpanded] = useState(false);

  const getCookieDescription = (type?: CookieTypes) => {
    switch (type) {
      case 'performance':
        return (
          <>
            Performance cookies allow us collect analytics data such as visits
            and traffic sources, so we can monitor and enhance the performance
            of our services. All data these cookies gather is aggregated and
            anonymous.
          </>
        );
      case 'functional':
        return (
          <>
            Functional cookies allow us to provide enhanced software and website
            functionality and personalisation. In some cases they may be set by
            third-party providers whose services we use to improve your
            experience. Without these cookies then these features may not work
            properly.
          </>
        );
      case 'targeting':
        return (
          <>
            Targeting Cookies are set through our site by our advertising
            partners. Those companies may use this data to get an insight into
            your interests and provide relevant adverts on other websites. They
            don&apos;t store personal information, instead are based on uniquely
            identifying your browser and internet device. Now allowing these
            will mean you&apos;ll see less targeted adverts.
          </>
        );

      default:
        return (
          <>
            These cookies are necessary for the website to work properly. They
            are normally set in response to your actions on the website, such as
            setting your privacy preferences and don&apos;t contain any
            identifying or sensitive information about you.
          </>
        );
    }
  };

  return (
    <div className={classNames(styles.type, className)}>
      <h4 onClick={() => setExpanded(!expanded)}>
        {cookie
          ? `${cookie} Cookies`
          : necessaryCookiesText || 'Strictly Necessary Cookies'}
        {cookie ? (
          <div>
            <Toggle
              onToggle={onToggle}
              cookie={cookie}
              checked={agreedCookies.includes(cookie)}
            />
            <Dropdown onClick={() => setExpanded(!expanded)} open={expanded} />
          </div>
        ) : (
          <small>{alwaysOnText || 'Always On'}</small>
        )}
      </h4>
      <AnimatePresence>
        {expanded && (
          <motion.p
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                height: 'auto',
                transition: {
                  opacity: {
                    delay: 0.2,
                  },
                },
              },
              collapsed: {
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    delay: 0.2,
                  },
                },
              },
            }}
            transition={{
              duration: 0.2,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            {getCookieDescription(cookie)}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Type;
