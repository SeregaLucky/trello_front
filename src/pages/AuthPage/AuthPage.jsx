import { Route, Routes } from 'react-router-dom';

import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import ForgotPasswordPage from 'pages/ForgotPasswordPage';
import ResetPasswordPage from 'pages/ResetPasswordPage';
import RedirectToLogin from 'components/Redirects/RedirectToLogin';

import { PATHS } from 'const/paths';

import styles from './AuthPage.module.scss';

const AuthPage = () => {
  return (
    <div className={styles.authContainer}>
      <Routes>
        <Route path={PATHS.AUTH.children.LOGIN.path} element={<LoginPage />} />

        <Route
          path={PATHS.AUTH.children.REGISTRATION.path}
          element={<RegistrationPage />}
        />

        <Route
          path={PATHS.AUTH.children.FORGOT_PASSWORD.path}
          element={<ForgotPasswordPage />}
        />

        <Route
          path={PATHS.AUTH.children.RESET_PASSWORD.path}
          element={<ResetPasswordPage />}
        />

        <Route path="" element={<RedirectToLogin />} />
      </Routes>
    </div>
  );
};

export default AuthPage;
