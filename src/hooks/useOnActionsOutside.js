import { useEffect } from 'react';

// !!! I DO NOT USE THIS FUNCTION !!!
export const useOnActionsOutside = (ref, callBack) => {
  /* CLICK OUTSIDE */
  useEffect(() => {
    const onListener = e => {
      if (ref.current?.contains(e.target)) return;
      callBack(e);
    };

    document.addEventListener('mousedown', onListener);
    document.addEventListener('touchstart', onListener);

    return () => {
      document.removeEventListener('mousedown', onListener);
      document.removeEventListener('touchstart', onListener);
    };
  }, [ref]);

  /* CLICK BY ESCAPE */
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key !== 'Escape') return;
      callBack(e);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
};
