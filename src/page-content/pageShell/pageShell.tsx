import { FC, ReactNode, useMemo } from 'react';
import ContactPanel from '../contact/contactPanel';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import styles from './pageShell.module.scss';

type PageShellProps = {
  children?: ReactNode;
  className?: string;
  withContactPanel?: boolean;
};

const PageShell: FC<PageShellProps> = ({
  children,
  className,
  withContactPanel,
}) => {
  const pageVariants = useMemo(
    () => ({
      hide: { opacity: 0 },
      show: { opacity: 1 },
      unmount: { opacity: 0, transition: { duration: 0.2 } },
    }),
    [],
  );

  return (
    <motion.div
      className={classNames(styles.wrapper, className)}
      variants={pageVariants}
      initial="hide"
      animate="show"
      exit="unmount"
    >
      {children}
      {withContactPanel ? (
        <ContactPanel
          className={styles.contactPanel}
          background="straight"
          staticBall
        />
      ) : null}
    </motion.div>
  );
};

export default PageShell;
