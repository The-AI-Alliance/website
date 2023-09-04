export * from '@carbon/react';

// Patch to get rid of TypeScript errors due to missing type definitions

declare module '@carbon/react' {
  declare const Header: (props: ?) => JSX.Element;
  declare const HeaderNavigation: (props: ?) => JSX.Element;
  declare const HeaderName: (props: ?) => JSX.Element;
  declare const HeaderMenu: (props: ?) => JSX.Element;
  declare const HeaderMenuButton: (props: ?) => JSX.Element;
  declare const HeaderMenuItem: (props: ?) => JSX.Element;
  declare const SideNav: (props: ?) => JSX.Element;
  declare const SideNavItems: (props: ?) => JSX.Element;
  declare const HeaderSideNavItems: (props: ?) => JSX.Element;
}
