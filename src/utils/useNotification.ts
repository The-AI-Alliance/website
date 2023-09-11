import { NotificationContext } from '@components/notificationwrapper/index.context';
import { useContext } from 'react';

export const useNotification = () => useContext(NotificationContext);
