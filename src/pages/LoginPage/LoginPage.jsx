import { ButtonAuth, Input } from 'ui';
import AuthHeader from 'components/AuthHeader';
import AuthRedirectFormTo from 'components/AuthRedirectFormTo';

import { useLoginForm } from './useLoginForm';

import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const { register, isLoading, errors, onSubmit } = useLoginForm();

  return (
    <div>
      <AuthHeader titlePage="Log in to your account" />

      <form onSubmit={onSubmit}>
        <div className={styles.containerInputs}>
          <Input
            type="text"
            placeholder="Login..."
            register={register('login')}
            error={errors.login}
          />

          <Input
            type="password"
            placeholder="Password..."
            register={register('password')}
            error={errors.password}
          />
        </div>

        <ButtonAuth isLoading={isLoading}>Sing in</ButtonAuth>
      </form>

      <AuthRedirectFormTo toNamePage="registration" />
    </div>
  );
};

export default LoginPage;
