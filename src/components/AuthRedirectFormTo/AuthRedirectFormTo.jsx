import { Link } from 'react-router-dom';

import { Urls } from 'helpers/urls';

import styles from './AuthRedirectFormTo.module.scss';

/**
 *
 * @param {object} props
 * @param {string} props.toNamePage - "login" | "registration". The name of the page where to redirect
 */
const AuthRedirectFormTo = ({ toNamePage }) => {
  if (toNamePage === 'registration') {
    return (
      <div className={styles.container}>
        <span className={styles.text}>No account? </span>

        <Link className={styles.link} to={Urls.getRegistrationURL()}>
          Sing up
        </Link>
      </div>
    );
  }

  if (toNamePage === 'login') {
    return (
      <div className={styles.container}>
        <span className={styles.text}>Have an account? </span>

        <Link className={styles.link} to={Urls.getLoginURL()}>
          Sing in
        </Link>
      </div>
    );
  }
};

export default AuthRedirectFormTo;
