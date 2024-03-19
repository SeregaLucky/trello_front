import { AuthRedirectFormTo, ButtonAuth, LabelInput } from 'ui';

import useRegistrationForm from './useRegistrationForm';

const RegistrationPage = () => {
  const { register, isLoading, errors, onSubmit } = useRegistrationForm();

  return (
    <div>
      <h2>Sing up</h2>

      <form onSubmit={onSubmit}>
        <LabelInput
          type="text"
          placeholder="Login..."
          register={register('login')}
          error={errors.login}
        />

        <LabelInput
          type="password"
          placeholder="Password..."
          register={register('password')}
          error={errors.password}
        />

        <ButtonAuth isLoading={isLoading}>Sing up</ButtonAuth>
      </form>

      {/* <AuthRedirectFormTo toNamePage="login" /> */}
    </div>
  );
};

export default RegistrationPage;
