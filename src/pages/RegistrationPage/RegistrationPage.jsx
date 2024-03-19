import { ButtonAuth, Input } from 'ui';

import useRegistrationForm from './hooks/useRegistrationForm';
import AuthHeader from 'components/AuthHeader';
import AuthRedirectFormTo from 'components/AuthRedirectFormTo';

import { YupPlaceholders } from 'helpers/helpersYup';

const RegistrationPage = () => {
  const { register, isLoading, errors, onSubmit } = useRegistrationForm();

  return (
    <div>
      <AuthHeader titlePage="Sing up" />

      <form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder={YupPlaceholders.LOGIN}
          register={register('login')}
          error={errors.login}
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

        <ButtonAuth isDisabled={isLoading}>Sing up</ButtonAuth>
      </form>

      <AuthRedirectFormTo toNamePage="login" />
    </div>
  );
};

export default RegistrationPage;
