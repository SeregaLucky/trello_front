import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { YupMesses } from 'helpers/helpersYup';

const schema = yup.object({
  email: yup
    .string()
    .required(YupMesses.REQUIRED('Email'))
    .email(YupMesses.EMAIL)
    .default(''),
});

export const useForgotPasswordForm = () => {
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
  const onSubmit = ({ email }) => {
    console.log({ email });
  };

  return {
    register,
    isLoading: false,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };
};
