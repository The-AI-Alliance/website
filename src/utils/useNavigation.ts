import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

export enum ROUTE {
  HOME = '',
  LEARN = 'learn',
  PARTNERS = 'partners',
}

export const ROUTE_LABEL: Record<ROUTE, string> = {
  [ROUTE.HOME]: 'Landing',
  [ROUTE.LEARN]: 'Learn more',
  [ROUTE.PARTNERS]: 'Partners',
};

export const routes = Object.values(ROUTE);

const useNavigation = () => {
  const router = useRouter();

  const currentRoute: ROUTE | null = useMemo(() => {
    const route = router.query?.route?.[0] as ROUTE;
    return routes.includes(route) ? route : ROUTE.HOME;
  }, [router]);

  const navigate = useCallback(
    (route: ROUTE) => {
      router.push(route, undefined, { shallow: true });
      setTimeout(() => window.scrollTo(0, 0), 420); // Wait till the previous page fades-out
    },
    [router],
  );

  return {
    navigate,
    currentRoute,
  };
};

export default useNavigation;
