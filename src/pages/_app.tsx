import type { AppProps } from 'next/app';
import { NotificationProvider } from '@components/notificationwrapper/index.context';
import '@styles/globals.scss';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  const ga = process.env.NEXT_PUBLIC_GA;

  return (
    <>
      <NotificationProvider>
        <Component {...pageProps} />
      </NotificationProvider>

      {ga ? (
        <div className="ga_container">
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}
          />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', '${ga}');
            `}
          </Script>
        </div>
      ) : null}
    </>
  );
}
