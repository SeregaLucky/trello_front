import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Refs } from 'const/refs';

const PopOver = ({ children, containerRef, closePopOver }) => {
  useEffect(() => {
    const onListener = e => {
      if (containerRef.current?.contains(e.target)) return;
      closePopOver(e);
    };

    document.addEventListener('mousedown', onListener);
    document.addEventListener('touchstart', onListener);

    return () => {
      document.removeEventListener('mousedown', onListener);
      document.removeEventListener('touchstart', onListener);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = e => {
      if (e.key !== 'Escape') return;
      closePopOver(e);
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return createPortal(children, Refs.POP_OVER_ROOT);
};

export default PopOver;
