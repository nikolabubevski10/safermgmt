import React from 'react';
import { useEffect } from 'react';

export const useOnClickOutside = (
  ref: React.MutableRefObject<
    | (HTMLInputElement &
        EventTarget & { contains: (e: EventTarget | null) => void })
    | null
  >,
  handler: (e: MouseEvent | TouchEvent) => void,
): void => {
  return useEffect(() => {
    const listener = (event: TouchEvent | MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
