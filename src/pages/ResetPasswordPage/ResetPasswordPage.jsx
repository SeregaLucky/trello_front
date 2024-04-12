import { ButtonAuth, Input } from 'ui';
import AuthHeader from 'components/AuthHeader';

import { useResetPasswordForm } from './hooks/useResetPasswordForm';

import { YupPlaceholders } from 'helpers/helpersYup';

import styles from './ResetPasswordPage.module.scss';

const ResetPasswordPage = () => {
  const { register, loading, errors, onSubmit } = useResetPasswordForm();

  return (
    <div>
      <AuthHeader titlePage="Create new Password?" />

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

        <ButtonAuth isDisabled={loading}>Reset Password</ButtonAuth>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
