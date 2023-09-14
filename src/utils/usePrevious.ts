import { useRef } from 'react';

export const usePrevious = <T, D>(value: T, defaultValue: D) => {
  const ref = useRef<{ value: T | D; prev: T | D }>({
    value,
    prev: defaultValue,
  });

  const current = ref.current.value;
  if (value !== current) {
    ref.current = {
      value,
      prev: current,
    };
  }

  return ref.current.prev;
};
