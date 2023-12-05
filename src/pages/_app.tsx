import type { AppProps } from 'next/app';
import { NotificationProvider } from '@components/notificationwrapper/index.context';
import '@styles/globals.scss';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationProvider>
      <Component {...pageProps} />

      {process.env.GA_ID ? (
        <div className="ga_container">
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`}
          />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', '${process.env.GA_ID}');
            `}
          </Script>
        </div>
      ) : null}
    </NotificationProvider>
  );
}
