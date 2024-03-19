import styles from './ButtonAuth.module.scss';

const ButtonAuth = ({ isDisabled, children }) => {
  return (
    <button
      className={styles.buttonAuth}
      type="submit"
      disabled={isDisabled}
      // disabled={true}
    >
      <span>{children}</span>
    </button>
  );
};

export default ButtonAuth;
