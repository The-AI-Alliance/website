import React, { useCallback, useMemo } from 'react';
import useNavigation, { ROUTE, ROUTE_LABEL } from '../../utils/useNavigation';
import { Button } from '@carbon/react';
import { ArrowLeft, ArrowRight } from '@carbon/icons-react';
import classnames from 'classnames';

import styles from './footer.module.scss';

const Footer: React.FC = () => {
  const { currentRoute, navigate } = useNavigation();

  const previousRoute = useMemo(
    () =>
      currentRoute === ROUTE.PROGRAM
        ? ROUTE.LEARN
        : currentRoute === ROUTE.PARTNERS
        ? ROUTE.PROGRAM
        : null,
    [currentRoute],
  );

  const nextRoute = useMemo(
    () =>
      currentRoute === ROUTE.LEARN
        ? ROUTE.PROGRAM
        : currentRoute === ROUTE.PROGRAM
        ? ROUTE.PARTNERS
        : null,
    [currentRoute],
  );

  const onPrev = useCallback(
    () => previousRoute && navigate(previousRoute),
    [navigate, previousRoute],
  );

  const onNext = useCallback(
    () => nextRoute && navigate(nextRoute),
    [navigate, nextRoute],
  );

  return previousRoute || nextRoute ? (
    <footer className={styles.footer}>
      {previousRoute ? (
        <div
          className={classnames(styles.footer__nav, styles.footer__nav__prev)}
        >
          <Button
            kind="ghost"
            onClick={onPrev}
            renderIcon={() => <ArrowLeft />}
          >
            {ROUTE_LABEL[previousRoute]}
          </Button>
        </div>
      ) : (
        <div></div>
      )}
      {nextRoute ? (
        <div
          className={classnames(styles.footer__nav, styles.footer__nav__next)}
        >
          <Button
            kind="ghost"
            onClick={onNext}
            renderIcon={() => <ArrowRight />}
          >
            {ROUTE_LABEL[nextRoute]}
          </Button>
        </div>
      ) : (
        <div></div>
      )}
    </footer>
  ) : null;
};

export default Footer;
