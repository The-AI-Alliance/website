import type { AppProps } from 'next/app';
import { NotificationProvider } from '@components/notificationwrapper/index.context';
import '@styles/globals.scss';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationProvider>
      <Component {...pageProps} />

      {process.env.NODE_ENV === 'production' ? (
        <div className="ga_container">
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-4D79BD68C0"
          />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'G-4D79BD68C0');
            `}
          </Script>
        </div>
      ) : null}
    </NotificationProvider>
  );
}
