import type { AppProps } from 'next/app';
import { NotificationProvider } from '@components/notificationwrapper/index.context';
import '@styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationProvider>
      <Component {...pageProps} />
    </NotificationProvider>
  );
}
