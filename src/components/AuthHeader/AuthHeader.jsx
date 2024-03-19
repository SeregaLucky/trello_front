import styles from './AuthHeader.module.scss';

const AuthHeader = ({ titlePage, children }) => {
  return (
    <>
      <h2 className={styles.titlePage}>{titlePage}</h2>
      {children}
    </>
  );
};

export default AuthHeader;
