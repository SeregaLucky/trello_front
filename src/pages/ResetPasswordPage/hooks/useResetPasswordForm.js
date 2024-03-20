import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { MIN_PASSWORD_LENGTH, YupMesses } from 'helpers/helpersYup';

const schema = yup.object({
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

export const useResetPasswordForm = () => {
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
  const onSubmit = ({ password, confirmPassword }) => {
    console.log({ password, confirmPassword });
  };

  return {
    register,
    isLoading: false,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };
};
