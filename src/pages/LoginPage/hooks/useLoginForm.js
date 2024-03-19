import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useGetUser } from './useGetUser';

import { noticeError, noticeSuccess } from 'helpers/showNotices';
import { YupMesses } from 'helpers/helpersYup';

const schema = yup.object({
  login: yup.string().required(YupMesses.REQUIRED('Login')).default(''),

  password: yup.string().required(YupMesses.REQUIRED('Password')).default(''),
});

export const useLoginForm = () => {
  const { getUser, loading } = useGetUser();

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
  const onSubmit = ({ login, password }) => {
    console.log({ login, password });
    noticeSuccess('DONE');
    noticeError('Error');

    // getUser(login, password);
  };

  return {
    register,
    isLoading: loading,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };
};
