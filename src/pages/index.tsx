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
import LandingPage from './landing';

import styles from '@styles/Landing.module.scss';

enum ROUTE {
  learn,
  program,
  partners,
}

export default function Home() {
  const [isSideNavExpanded, setSideNavExpanded] = useState(false);
  const [section, setSection] = useState<null | ROUTE>(null);

  const onClickSideNavExpand = useCallback(
    () => setSideNavExpanded(!isSideNavExpanded),
    [isSideNavExpanded],
  );

  const buildMenuBtn = useCallback(
    (path: ROUTE, label: string) => (
      <HeaderMenuItem
        isActive={section === path}
        onClick={setSection.bind(null, path)}
      >
        {label}
      </HeaderMenuItem>
    ),
    [section],
  );

  const headerMenuItems = useMemo(
    () => (
      <>
        {buildMenuBtn(ROUTE.learn, 'Learn more')}
        {buildMenuBtn(ROUTE.program, 'Program')}
        {buildMenuBtn(ROUTE.partners, 'Partners')}
      </>
    ),
    [buildMenuBtn],
  );

  return (
    <>
      <Head>
        <title>AI Alliance</title>
        <meta name="description" content="IBM AI Alliance" />
        <meta name="author" content="Stanislav Pelak - pelaksta@gmail.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TODO */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header aria-label="IBM Platform Name" className={styles.header}>
          <HeaderMenuButton
            aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'}
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
            aria-expanded={isSideNavExpanded}
          />
          <HeaderName prefix="">AI Alliance</HeaderName>
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
        <LandingPage />
      </main>
    </>
  );
}
