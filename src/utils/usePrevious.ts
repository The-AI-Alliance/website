import { useEffect, useRef } from 'react';

export const usePrevious = <T>(value: T) => {
  const ref = useRef<T>(value);

  useEffect(() => {
    if (value !== ref.current) {
      ref.current = value;
    }
  }, [value]);

  return ref.current;
};
