import { useCallback, useEffect, useRef } from 'react';
import useDebounce from './useDebounce';

const useResize = (callback: () => void, onStart?: () => void) => {
  const isResizing = useRef(false);

  const debouncedCallback = useDebounce(() => {
    isResizing.current = false;
    callback();
  });

  const resizeHandler = useCallback(() => {
    if (!isResizing.current) {
      isResizing.current = true;
      onStart?.();
    }
    debouncedCallback();
  }, [debouncedCallback, onStart]);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    () => window.removeEventListener('resize', resizeHandler);
  }, [resizeHandler]);
};

export default useResize;
