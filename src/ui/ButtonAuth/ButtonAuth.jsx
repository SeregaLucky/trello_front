import styles from './ButtonAuth.module.scss';

const ButtonAuth = ({ type = 'submit', isDisabled, onClick, children }) => {
  return (
    <button
      className={styles.buttonAuth}
      type={type}
      disabled={isDisabled}
      // disabled={true}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default ButtonAuth;
