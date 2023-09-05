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
import { useCallback, useMemo, useState } from 'react';
import LandingPage from '../page-content/landing/landing';
import LearnMorePage from '../page-content/learn/learn';
import { GetServerSidePropsContext } from 'next';
import useNavigation, {
  ROUTE,
  ROUTE_LABEL,
  routes,
} from '../utils/useNavigation';
import ProgramPage from '../page-content/program/program';

import styles from '@styles/main.module.scss';

export default function Home() {
  const [isSideNavExpanded, setSideNavExpanded] = useState(false);
  const { navigate, currentRoute } = useNavigation();

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
        {buildMenuBtn(ROUTE.PROGRAM)}
        {buildMenuBtn(ROUTE.PARTNERS)}
      </>
    ),
    [buildMenuBtn],
  );

  const renderContent = useCallback(() => {
    switch (currentRoute) {
      case ROUTE.LEARN:
        return <LearnMorePage />;

      case ROUTE.PROGRAM:
        return <ProgramPage />;

      default:
        return <LandingPage />;
    }
  }, [currentRoute]);

  const handleGoHome = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      navigate(ROUTE.HOME);
    },
    [navigate],
  );

  return (
    <>
      <Head>
        <title>AI Alliance</title>
        <meta name="description" content="IBM AI Alliance" />
        <meta
          name="author"
          content="Stanislav Pelak - stanislav.pelak@ibm.com"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TODO */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
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
          >
            <SideNavItems>
              <HeaderSideNavItems>{headerMenuItems}</HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
        </Header>
        {renderContent()}
      </main>
    </>
  );
}

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const route = context.params?.route?.[0];
  if (route && !routes.includes(route as ROUTE)) {
    return { redirect: { destination: '/' } };
  }
  return { props: {} };
};
