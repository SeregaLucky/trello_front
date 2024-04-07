import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useRegistrationUser } from './useRegistrationUser';

import { MIN_PASSWORD_LENGTH, YupMesses } from 'helpers/helpersYup';
import { useNavigation } from 'hooks/useNavigation';
import { noticeError } from 'helpers/showNotices';

const schema = yup.object({
  email: yup
    .string()
    .required(YupMesses.REQUIRED('Email'))
    .email(YupMesses.EMAIL)
    .default(''),

  password: yup
    .string()
    .required(YupMesses.REQUIRED('Password'))
    // .min(MIN_PASSWORD_LENGTH, YupMesses.MIN_STR(MIN_PASSWORD_LENGTH))
    // .matches(/\d/, YupMesses.MIN_ONE_NUMERIC)
    // .matches(/\p{Lu}/u, YupMesses.MIN_ONE_UPPERCASE_LETTER)
    // .matches(/\p{Ll}/u, YupMesses.MIN_ONE_LOWERCASE_LETTER)
    .default(''),

  confirmPassword: yup
    .string()
    .required(YupMesses.REQUIRED('Confirm password'))
    .test('match', 'Fields must match', function (value) {
      return value === this.parent.password;
    })
    .default(''),
});

export const useRegistrationForm = () => {
  const { registrationUser, loading } = useRegistrationUser();
  const { goToHome } = useNavigation();

  /* FORM */
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  /* METHOD */
  const onSubmit = async ({ email, password, confirmPassword }) => {
    console.log({ email, password, confirmPassword });

    try {
      const ddd = await registrationUser({ email, password, confirmPassword });
      // console.log('ddd', ddd);
      // goToHome();
    } catch (error) {
      // console.log(111, error);
      // console.log(222, error.message);
      // console.log(333, error.response);
      // console.log(444, error.errors);
      // noticeError(error.message);

      const { message } = error;
      // console.log(777, message);
    }
  };

  return {
    register,
    isLoading: loading,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };
};
