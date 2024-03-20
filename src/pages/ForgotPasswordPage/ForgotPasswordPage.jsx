import { ButtonAuth, Input } from 'ui';
import AuthHeader from 'components/AuthHeader';

import { useForgotPasswordForm } from './hooks/useForgotPasswordForm';
import { useNavigation } from 'hooks/useNavigation';

import { YupPlaceholders } from 'helpers/helpersYup';

import styles from './ForgotPasswordPage.module.scss';

const RegistrationPage = () => {
  const { register, isLoading, errors, onSubmit } = useForgotPasswordForm();

  const { goToLogin } = useNavigation();

  return (
    <div>
      <AuthHeader titlePage="Forgot Password?" />

      <form onSubmit={onSubmit}>
        <div className={styles.containerInputs}>
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

        <div className={styles.controllers}>
          <ButtonAuth isDisabled={isLoading}>Send</ButtonAuth>
          <ButtonAuth type="button" onClick={goToLogin}>
            Cancel
          </ButtonAuth>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
