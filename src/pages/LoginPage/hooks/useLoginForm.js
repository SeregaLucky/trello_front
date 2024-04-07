import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useGetUser } from './useGetUser';

import { MIN_PASSWORD_LENGTH, YupMesses } from 'helpers/helpersYup';
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
    .min(MIN_PASSWORD_LENGTH, YupMesses.MIN_STR(MIN_PASSWORD_LENGTH))
    .default(''),
});

export const useLoginForm = () => {
  const { loginUser, loading } = useGetUser();
  // const { loginUser, loading } = { loginUser: 1, loading: false };

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
  const onSubmit = async ({ email, password }) => {
    try {
      await loginUser({ email, password });
    } catch (error) {
      noticeError(error.message);
    }
  };

  return {
    register,
    isLoading: loading,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };
};
