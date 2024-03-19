import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import { Refs } from 'const/refs';

import styles from './Modal.module.scss';

const ModalInner = ({ children, closeModal, style }) => {
  const onClickByModal = e => {
    if (e.target !== e.currentTarget) return;
    closeModal();
  };

  useEffect(() => {
    const handleKeyDown = ({ key }) => {
      if (key !== 'Escape') return;
      closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, []);

  return createPortal(
    <div
      className={cn(styles.overlay, style)}
      onClick={onClickByModal}
      role="presentation"
    >
      {children}
    </div>,

    Refs.MODAL_ROOT,
  );
};

export default ModalInner;
