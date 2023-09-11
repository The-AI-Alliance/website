// eslint-disable-next-line import/named
import { ToastNotificationProps } from '@carbon/react';
import React, {
  useState,
  createContext,
  useRef,
  useCallback,
  ReactNode,
} from 'react';

export type Notification = {
  action?: { label: string; onClick: () => void };
  autoClose?: number;
  description: string;
  kind: ToastNotificationProps['kind'];
  lowContrast?: boolean;
  subtitle?: string;
  title: string;
  withSidebar: boolean;
};

interface NotificationContextInterface {
  notifications: Array<Partial<Notification> & { id: string }>;
  setNotification?: (notification: Partial<Notification>) => void;
  closeNotification?: (id: string) => void;
  closeAllNotifications?: () => void;
}

export const NotificationContext = createContext<NotificationContextInterface>({
  notifications: [],
});

export const NotificationProvider = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const idCounter = useRef<number>(0);
  const notificationsRef = useRef<
    Array<Partial<Notification> & { id: string }>
  >([]);
  const [notifications, _setNotifications] = useState<
    Array<Partial<Notification> & { id: string }>
  >([]);

  const getId = useCallback(() => {
    idCounter.current++;
    return idCounter.current;
  }, []);

  const closeNotification = (id: string) => {
    notificationsRef.current = notificationsRef.current.filter(
      n => n.id !== id,
    );
    _setNotifications(notificationsRef.current);
  };

  const closeAllNotifications = useCallback(() => {
    notificationsRef.current = notificationsRef.current = [];
    _setNotifications(notificationsRef.current);
  }, []);

  const setNotification = useCallback(
    (newNotification: Partial<Notification>) => {
      const notificationId = String(getId());

      notificationsRef.current = [
        ...notificationsRef.current,
        {
          ...newNotification,
          id: notificationId,
        },
      ];
      _setNotifications(notificationsRef.current);

      if (newNotification.autoClose) {
        setTimeout(
          () => closeNotification(notificationId),
          newNotification.autoClose,
        );
      }
      return notificationId;
    },
    [getId],
  );

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        setNotification,
        closeNotification,
        closeAllNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
