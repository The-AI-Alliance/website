import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Head from 'next/head';
import {
  Header,
  HeaderNavigation,
  HeaderName,
  HeaderMenuButton,
  HeaderMenuItem,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import LandingPage from '../page-content/landing/landing';
import LearnMorePage from '../page-content/learn/learn';
import { GetServerSidePropsContext } from 'next';
import useNavigation, {
  ROUTE,
  ROUTE_LABEL,
  routes,
} from '../utils/useNavigation';
import MembersPage from '../page-content/members/members';
import FeatureFlagsContext from '../utils/featureFlagsContext';
import NotificationWrapper from '@components/notificationwrapper';
import { AnimatePresence } from 'framer-motion';
import FocusAreasPage from '../page-content/focusAreas/focusAreas';
import NewsPage from '../page-content/news/news';
import Script from 'next/script';
import { CookieAcceptance } from '@components/cookiesConsent';
import { CookieTypes } from '@components/cookiesConsent/helpers/Types';

import styles from '@styles/main.module.scss';

export default function Home({
  analyticsID,
  emailConfigured,
  hubSpotConfigured,
}: {
  analyticsID?: string;
  emailConfigured: boolean;
  hubSpotConfigured: boolean;
}) {
  const [isSideNavExpanded, setSideNavExpanded] = useState(false);
  const { navigate: _navigate, currentRoute } = useNavigation();
  const [renderedRoute, setRenderedRoute] = useState<ROUTE | null>(
    currentRoute,
  );

  const exitComplete = useCallback(() => {
    setRenderedRoute(currentRoute);
    window.scrollTo(0, 0);
  }, [currentRoute]);

  useEffect(() => {
    if (currentRoute !== renderedRoute) {
      setRenderedRoute(null);
    }
  }, [currentRoute, renderedRoute]);

  const navigate = useCallback(
    (route: ROUTE) => {
      isSideNavExpanded && setSideNavExpanded(false);
      _navigate(route);
    },
    [_navigate, isSideNavExpanded],
  );

  const onClickSideNavExpand = useCallback(
    () => setSideNavExpanded(!isSideNavExpanded),
    [isSideNavExpanded],
  );

  const buildMenuBtn = useCallback(
    (path: ROUTE) => (
      <HeaderMenuItem
        isActive={currentRoute === path}
        onClick={navigate.bind(null, path)}
      >
        {ROUTE_LABEL[path]}
      </HeaderMenuItem>
    ),
    [navigate, currentRoute],
  );

  const headerMenuItems = useMemo(
    () => (
      <>
        {buildMenuBtn(ROUTE.LEARN)}
        {buildMenuBtn(ROUTE.MEMBERS)}
        {buildMenuBtn(ROUTE.FOCUS_AREAS)}
        {buildMenuBtn(ROUTE.NEWS)}
      </>
    ),
    [buildMenuBtn],
  );

  const renderContent = useCallback(() => {
    switch (renderedRoute) {
      case ROUTE.LEARN:
        return <LearnMorePage key="learnMorePage" />;

      case ROUTE.MEMBERS:
        return <MembersPage key="membersPage" />;

      case ROUTE.FOCUS_AREAS:
        return <FocusAreasPage key="faqPage" />;

      case ROUTE.NEWS:
        return <NewsPage key="newsPage" />;

      case ROUTE.HOME:
        return <LandingPage key="landingPage" />;

      default:
        return null;
    }
  }, [renderedRoute]);

  const handleGoHome: MouseEventHandler<HTMLAnchorElement> = useCallback(
    e => {
      e.preventDefault();
      e.stopPropagation();
      navigate(ROUTE.HOME);
    },
    [navigate],
  );

  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const injectScript = useCallback(
    (cookie: CookieTypes) => {
      if (cookie === 'performance' && analyticsID?.length) {
        setAnalyticsEnabled(true);
      }
    },
    [analyticsID],
  );

  return (
    <>
      <FeatureFlagsContext.Provider
        value={{
          contactForm: {
            email: emailConfigured,
            hubSpot: hubSpotConfigured,
            enabled: emailConfigured || hubSpotConfigured,
          },
        }}
      >
        <Head>
          <title>AI Alliance</title>
          <meta
            name="description"
            content="A community of technology creators, developers and adopters collaborating to advance safe, responsible AI rooted in open innovation."
          />
          <meta
            name="author"
            content="Stanislav Pelak - stanislav.pelak@ibm.com"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <NotificationWrapper />
          <Header aria-label="AI Alliance" className={styles.header}>
            <HeaderMenuButton
              aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'}
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
              aria-expanded={isSideNavExpanded}
            />
            <HeaderName prefix="" href="/" onClick={handleGoHome}>
              AI Alliance
            </HeaderName>
            <HeaderNavigation aria-label="AI Alliance">
              {headerMenuItems}
            </HeaderNavigation>
            <SideNav
              aria-label="Side navigation"
              expanded={isSideNavExpanded}
              isPersistent={false}
              onSideNavBlur={onClickSideNavExpand}
              inert={undefined}
            >
              <SideNavItems>
                <HeaderSideNavItems>{headerMenuItems}</HeaderSideNavItems>
              </SideNavItems>
            </SideNav>
          </Header>
          <AnimatePresence onExitComplete={exitComplete}>
            {renderContent()}
          </AnimatePresence>
        </main>
      </FeatureFlagsContext.Provider>

      {analyticsID?.length ? (
        <CookieAcceptance
          smallText="We are using cookies to improve the user experience by collecting
      anonymous analytics of the site usage."
          largeText="Please, specify what type of cookies we can store in your browser."
          cookies={['performance']}
          appName="AI Alliance"
          necessaryCookiesText="Necessary cookies"
          injectScript={injectScript}
        />
      ) : null}
      {analyticsEnabled && analyticsID?.length ? (
        <div className="ga_container">
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${analyticsID}`}
          />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${analyticsID}');
            `}
          </Script>
        </div>
      ) : null}
    </>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const route = context.params?.route?.[0];
  if (route && !routes.includes(route as ROUTE)) {
    return { redirect: { destination: '/' } };
  }

  return {
    props: {
      analyticsID: process.env.GA_ID,
      emailConfigured:
        !!process.env.SEND_GRID_API_KEY &&
        !!process.env.EMAIL_FROM &&
        !!process.env.EMAIL_TO,
      hubSpotConfigured:
        !!process.env.HUBSPOT_ACCESS_TOKEN &&
        !!process.env.HUBSPOT_PORTAL_ID &&
        !!process.env.HUBSPOT_FORM_GUID,
    },
  };
};
