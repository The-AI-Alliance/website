import React, { useEffect, useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { storeCookies } from '../../helpers/Utils';
import Type from '../Type';
import { BaseContext } from '../../context/BaseContext';
import { CookieTypes } from '../../helpers/Types';
import { CookieAcceptanceProps } from './CookieAcceptance.types';
import classNames from 'classnames';
import Image from 'next/image';
import Button from '../Button';

import styles from './CookieAcceptance.module.scss';

const CookieAcceptance = ({
  className,
  smallText,
  largeText,
  moreInfoText,
  acceptButtonText,
  settingsButtonText,
  privacyText,
  confirmText,
  closeText,
  necessaryCookiesText,
  alwaysOnText,
  privacyPolicyURL,
  image,
  injectScript,
  cookies,
  appName,
  settings,
  onConfirm,
  onClose,
}: CookieAcceptanceProps) => {
  const {
    visible,
    expanded,
    agreedCookies,
    setVisible,
    setExpanded,
    handleSetAgreeCookies,
  } = useContext(BaseContext);

  // Framer Motion animation data
  const animate = {
    opacity: 1,
    translateY: 0,
    transition: {
      type: 'tween',
      ease: 'anticipate',
      duration: 1,
    },
  };
  const exit = {
    opacity: 0,
    translateY: 100,
    transition: {
      type: 'tween',
      ease: 'anticipate',
      duration: 1,
    },
  };
  const initial = { opacity: 0, translateY: 100 };

  const handleSingleCookieConsent = (
    cookie: CookieTypes,
    agreement: boolean,
  ) => {
    if (agreement) {
      handleSetAgreeCookies([...agreedCookies, cookie]);
    } else {
      handleSetAgreeCookies(agreedCookies.filter(item => item !== cookie));
    }
  };

  const handleConfirm = (all?: boolean) => {
    // Agree to all cookies provided
    if (all) {
      handleSetAgreeCookies(cookies, injectScript);
      storeCookies(cookies, cookies, appName);
    } else {
      // Agree to specific cookies
      handleSetAgreeCookies(agreedCookies, injectScript);
      storeCookies(cookies, agreedCookies, appName);
    }
    setVisible(false);
    onConfirm?.();
  };

  useEffect(() => {
    if (
      localStorage.getItem(`${appName}_ReactCookieAcceptance_hasSetCookies`) ===
        'true' &&
      !settings
    ) {
      const agreed: CookieTypes[] = [];
      cookies &&
        cookies.map(cookie => {
          const storedCookie = localStorage.getItem(`${appName}_${cookie}`);
          if (storedCookie) {
            agreed.push(cookie);
          }
        });
      handleSetAgreeCookies(agreed, injectScript);
    } else {
      setVisible(true);
    }
    if (settings) {
      setExpanded(true);
    }
  }, [settings]); // eslint-disable-line

  const handleCloseSettings = () => {
    if (
      localStorage.getItem(`${appName}_ReactCookieAcceptance_hasSetCookies`) ===
      'true'
    ) {
      setVisible(false);
      setExpanded(false);
      onClose?.();
    } else {
      setExpanded(false);
    }
    setVisible(false);
    onClose?.();
  };

  const privacyPolicyLink = (
    <>
      {privacyPolicyURL && (
        <a href={privacyPolicyURL} target="_blank" rel="noreferrer">
          {moreInfoText || 'More Info'}
        </a>
      )}
    </>
  );

  const initialContent = (
    <>
      {image && (
        <Image className={styles.modalImg} src={image} alt="Cookie Policy" />
      )}
      <div className={styles.modalInner}>
        <p>
          {smallText || 'Please accept our cookie policy'} {privacyPolicyLink}
        </p>
        <div className={styles.buttonContainer}>
          <Button
            type="primary"
            click={() => handleConfirm(true)}
            text={acceptButtonText || 'Accept All Cookies'}
          />
          <Button
            type="secondary"
            click={() => setExpanded(true)}
            text={settingsButtonText || 'Cookie Settings'}
          />
        </div>
      </div>
    </>
  );

  const expandedContent = (
    <div className={styles.modalInner}>
      <h2>{privacyText || 'Privacy Settings'}</h2>
      <p>
        {largeText || 'Please accept our cookie policy'} {privacyPolicyLink}
      </p>
      {cookies &&
        cookies.map(cookie => (
          <Type
            cookie={cookie}
            onToggle={handleSingleCookieConsent}
            key={cookie}
            necessaryCookiesText={necessaryCookiesText}
            alwaysOnText={alwaysOnText}
          />
        ))}
      <Type
        necessaryCookiesText={necessaryCookiesText}
        alwaysOnText={alwaysOnText}
        onToggle={handleSingleCookieConsent}
      />
      <div className={styles.expandedAction}>
        <div className={styles.buttonContainer}>
          <Button
            type="primary"
            click={() => handleConfirm()}
            text={confirmText || 'Confirm Choices'}
          />
          <Button
            type="secondary"
            click={() => handleCloseSettings()}
            text={closeText || 'Close'}
          />
        </div>
      </div>
    </div>
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          animate={animate}
          exit={exit}
          initial={initial}
          className={classNames(styles.cookieAcceptance, className, {
            [styles.expanded]: expanded,
          })}
        >
          {expanded ? expandedContent : initialContent}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieAcceptance;
