import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useGetUser } from './useGetUser';

import { MIN_PASSWORD_LENGTH, YupMesses } from 'helpers/helpersYup';

const schema = yup.object({
  email: yup
    .string()
    .required(YupMesses.REQUIRED('Email'))
    .email(YupMesses.EMAIL)
    .default(''),

  password: yup
    .string()
    .required(YupMesses.REQUIRED('Password'))
    .min(MIN_PASSWORD_LENGTH, YupMesses.MIN_STR(MIN_PASSWORD_LENGTH))
    .default(''),
});

export const useLoginForm = () => {
  const { loginUser, loading } = useGetUser();

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
  const onSubmit = ({ email, password }) => {
    console.log({ email, password });

    // loginUser(login, password);
  };

  return {
    register,
    isLoading: loading,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };
};
