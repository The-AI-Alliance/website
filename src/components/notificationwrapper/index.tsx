import React from 'react';
import Toast from '@components/notification/toast';
import styles from './index.module.scss';
import classnames from 'classnames';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useNotification } from '@utils/useNotification';

const toastVariants: Variants = {
  hidden: {
    right: '-100%',
    transition: {
      right: {
        bounce: 0,
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  },
  shown: {
    right: 0,
    transition: {
      right: {
        bounce: 0,
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  },
};

const NotificationWrapper: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { notifications, closeNotification } = useNotification();

  return (
    <>
      <div className={styles.toastsWrapper}>
        <AnimatePresence>
          {notifications.map(notification => {
            const close = () => closeNotification?.(notification.id);
            return (
              <motion.div
                className={styles.toastWrapper}
                key={notification.id}
                variants={toastVariants}
                initial="hidden"
                animate="shown"
                exit="hidden"
              >
                <Toast
                  title={notification.title}
                  kind={notification.kind ?? 'info'}
                  subtitle={notification.subtitle}
                  onCloseButtonClick={close}
                  className={classnames(
                    styles.notification,
                    styles['notification--toast'],
                    className,
                  )}
                  lowContrast={!!notification.lowContrast}
                  role={'alert'}
                ></Toast>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </>
  );
};

export default NotificationWrapper;
