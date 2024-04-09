import { ButtonAuth, Input } from 'ui';
import AuthHeader from 'components/AuthHeader';

import { useForgotPasswordForm } from './hooks/useForgotPasswordForm';
import { useNavigation } from 'hooks/useNavigation';

import { YupPlaceholders } from 'helpers/helpersYup';

import styles from './ForgotPasswordPage.module.scss';

const RegistrationPage = () => {
  const { register, loading, errors, onSubmit } = useForgotPasswordForm();

  const { goToLogin } = useNavigation();

  return (
    <div>
      <AuthHeader titlePage="Forgot Password?" />

      <form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder={YupPlaceholders.EMAIL}
          register={register('email')}
          error={errors.email}
        />

        <div className={styles.controllers}>
          <ButtonAuth isDisabled={loading}>Send</ButtonAuth>
          <ButtonAuth type="button" onClick={goToLogin}>
            Cancel
          </ButtonAuth>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
