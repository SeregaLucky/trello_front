import { ButtonAuth, Input } from 'ui';

import AuthHeader from 'components/AuthHeader';
import AuthRedirectFormTo from 'components/AuthRedirectFormTo';

import { useRegistrationForm } from './hooks/useRegistrationForm';

import { YupPlaceholders } from 'helpers/helpersYup';

import styles from './RegistrationPage.module.scss';

const RegistrationPage = () => {
  const { register, onSubmit, loading, errors } = useRegistrationForm();

  return (
    <div>
      <AuthHeader titlePage="Sing up" />

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
          <Input
            type="password"
            placeholder={YupPlaceholders.CONFIRM_PASSWORD}
            register={register('confirmPassword')}
            error={errors.confirmPassword}
          />
        </div>

        <ButtonAuth isDisabled={loading}>Sing up</ButtonAuth>
      </form>

      <AuthRedirectFormTo toNamePage="login" />
    </div>
  );
};

export default RegistrationPage;
