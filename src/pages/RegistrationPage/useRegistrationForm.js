import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { noticeError, noticeSuccess } from 'helpers/showNotices';
import { useRegistrationUser } from './useRegistrationUser';

const schema = yup.object({
  login: yup
    .string()
    .required('Login can not be empty')
    // .label('111')
    .default(''),

  password: yup
    .string()
    .required('Password can not be empty')
    // .label('222')
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
  const onSubmit = ({ login, password }) => {
    console.log({ login, password });
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
