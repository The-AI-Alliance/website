import React, {
  MouseEventHandler,
  useCallback,
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
import { usePrevious } from '@utils/usePrevious';
import FocusAreasPage from '../page-content/focusAreas/focusAreas';
import NewsPage from '../page-content/news/news';

import styles from '@styles/main.module.scss';

export default function Home({
  enableContactForm,
}: {
  enableContactForm: boolean;
}) {
  const [isSideNavExpanded, setSideNavExpanded] = useState(false);
  const { navigate: _navigate, currentRoute } = useNavigation();

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
    switch (currentRoute) {
      case ROUTE.LEARN:
        return <LearnMorePage key="learnMorePage" />;

      case ROUTE.MEMBERS:
        return <MembersPage key="membersPage" />;

      case ROUTE.FOCUS_AREAS:
        return <FocusAreasPage key="faqPage" />;

      case ROUTE.NEWS:
        return <NewsPage key="newsPage" />;

      default:
        return <LandingPage key="landingPage" />;
    }
  }, [currentRoute]);

  const handleGoHome: MouseEventHandler<HTMLAnchorElement> = useCallback(
    e => {
      e.preventDefault();
      e.stopPropagation();
      navigate(ROUTE.HOME);
    },
    [navigate],
  );

  return (
    <FeatureFlagsContext.Provider value={{ contactForm: enableContactForm }}>
      <Head>
        <title>AI Alliance</title>
        <meta name="description" content="IBM AI Alliance" />
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
        <AnimatePresence>{renderContent()}</AnimatePresence>
      </main>
    </FeatureFlagsContext.Provider>
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
      enableContactForm:
        !!process.env.SEND_GRID_API_KEY &&
        !!process.env.EMAIL_FROM &&
        !!process.env.EMAIL_TO,
    },
  };
};
