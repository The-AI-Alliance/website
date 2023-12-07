import { useCallback, useEffect, useState } from 'react';
import useResize from './useResize';

export enum Breakpoint {
  SM,
  MD,
  LG,
  XLG,
  MAX,
}

const useBreakpoint = (): Breakpoint | undefined => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>();

  const getBreakpoint = useCallback((width: number) => {
    if (width >= 1584) return Breakpoint.MAX;
    if (width >= 1312) return Breakpoint.XLG;
    if (width >= 1056) return Breakpoint.LG;
    if (width >= 672) return Breakpoint.MD;
    return Breakpoint.SM;
  }, []);

  const updateBreakpoint = useCallback(
    () => setBreakpoint(getBreakpoint(window.outerWidth)),
    [getBreakpoint],
  );

  const reset = useCallback(() => setBreakpoint(undefined), []);

  useResize(updateBreakpoint, reset);

  useEffect(() => {
    updateBreakpoint();
  }, [updateBreakpoint]);

  return breakpoint;
};

export default useBreakpoint;
