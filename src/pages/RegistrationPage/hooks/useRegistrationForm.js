import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useRegistrationUser } from './useRegistrationUser';

import { noticeError, noticeSuccess } from 'helpers/showNotices';
import { MIN_PASSWORD_LENGTH, YupMesses } from 'helpers/helpersYup';

const schema = yup.object({
  login: yup.string().required(YupMesses.REQUIRED('Login')).default(''),

  password: yup
    .string()
    .required(YupMesses.REQUIRED('Password'))
    .min(MIN_PASSWORD_LENGTH, YupMesses.MIN_STR(MIN_PASSWORD_LENGTH))
    .matches(/\d/, YupMesses.MIN_ONE_NUMERIC)
    .matches(/\p{Lu}/u, YupMesses.MIN_ONE_UPPERCASE_LETTER)
    .matches(/\p{Ll}/u, YupMesses.MIN_ONE_LOWERCASE_LETTER)
    .default(''),

  confirmPassword: yup
    .string()
    .required(YupMesses.REQUIRED('Confirm password'))
    .test('match', 'Fields must match', function (value) {
      return value === this.parent.password;
    })
    .default(''),
});

const useRegistrationForm = () => {
  const { registrationUser, loading } = useRegistrationUser();

  /* FORM */
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    delayError: 1000,
    mode: 'onSubmit',
  });

  /* METHOD */
  const onSubmit = ({ login, password, confirmPassword }) => {
    console.log({ login, password, confirmPassword });
    noticeSuccess('DONE');
    noticeError('Error');

    // registrationUser(login, password);
  };

  return {
    register,
    isLoading: loading,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };
};

export default useRegistrationForm;
