import { ButtonAuth, Input } from 'ui';
import AuthHeader from 'components/AuthHeader';
import AuthRedirectFormTo from 'components/AuthRedirectFormTo';

import { useLoginForm } from './hooks/useLoginForm';

import styles from './LoginPage.module.scss';
import { YupPlaceholders } from 'helpers/helpersYup';
import { Link } from 'react-router-dom';
import { Urls } from 'helpers/urls';

const LoginPage = () => {
  const { register, isLoading, errors, onSubmit } = useLoginForm();

  return (
    <div>
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
