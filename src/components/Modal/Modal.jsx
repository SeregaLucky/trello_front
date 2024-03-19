import ModalInner from './ModalInner';

const Modal = ({ children, isOpenModal, closeModal, style }) => {
  if (!isOpenModal) return null;

  return (
    <ModalInner closeModal={closeModal} style={style}>
      {children}
    </ModalInner>
  );
};

export default Modal;
