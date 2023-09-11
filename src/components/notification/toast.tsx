import React, { useCallback } from 'react';
import classnames from 'classnames';
// eslint-disable-next-line import/named
import { ToastNotification, ToastNotificationProps } from '@carbon/react';

import styles from './toast.module.scss';

interface ToastProps extends ToastNotificationProps {
  className?: string;
  isMultiline?: boolean;
}

const Toast: React.FC<ToastProps> = ({
  className,
  lowContrast = true,
  onClose,
  ...props
}) => {
  const handleClose: ToastNotificationProps['onClose'] = useCallback(
    (e: React.MouseEvent) => {
      onClose?.(e);
      return false; // Removed by the notification context to enable animations
    },
    [onClose],
  );

  return (
    <div className={classnames(styles.toast, className)}>
      <ToastNotification
        {...props}
        lowContrast={lowContrast}
        onClose={handleClose}
      />
    </div>
  );
};

export default Toast;
