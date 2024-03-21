import { Link } from 'react-router-dom';

import { ButtonAuth, Input } from 'ui';
import AuthHeader from 'components/AuthHeader';
import AuthRedirectFormTo from 'components/AuthRedirectFormTo';

import { useLoginForm } from './hooks/useLoginForm';

import { YupPlaceholders } from 'helpers/helpersYup';
import { Urls } from 'helpers/urls';

import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const { register, isLoading, errors, onSubmit } = useLoginForm();

  return (
    <div className={styles.loginContainer}>
      <AuthHeader titlePage="Log in to your account" />

      <form onSubmit={onSubmit}>
        <div className={styles.containerInputs}>
          <Input
            type="text"
            placeholder={YupPlaceholders.EMAIL}
            register={register('email')}
            error={errors.email}
          />

          <Input
            type="password"
            placeholder={YupPlaceholders.PASSWORD}
            register={register('password')}
            error={errors.password}
          />
        </div>

        <Link to={Urls.getForgotPasswordURL()}>Forgot your password?</Link>

        <ButtonAuth isDisabled={isLoading}>Sing in</ButtonAuth>
      </form>

      <AuthRedirectFormTo toNamePage="registration" />
    </div>
  );
};

export default LoginPage;
