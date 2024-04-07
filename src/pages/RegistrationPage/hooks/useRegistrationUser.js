import { useMutation } from '@apollo/client';

import { REGISTRATION_USER } from 'apollo/auth';

import { noticeError } from 'helpers/showNotices';

import { useNavigation } from 'hooks/useNavigation';

/* IN PROGRESS */
export const useRegistrationUser = () => {
  const { goToBoards } = useNavigation();

  const [registrationUser1, { error, loading }] = useMutation(
    REGISTRATION_USER,

    // {
    //   update(cache, { data: { user } }) {
    //     console.log('user', user);
    //   },
    // },
  );

  // error ? noticeError('Error') : goToBoards();
  // console.log('error=>', error);
  // console.log(222222, error?.message);
  // console.log(333, error?.response);
  // console.log(444, error?.errors);

  const { message } = error || {};
  // console.log(777777, message);

  return {
    // getUser: (login, password) => getUser(login, password),
    // registrationUser: (login, password) => console.log(login, password),
    registrationUser: async ({ email, password, confirmPassword }) => {
      // try {
      //   await registrationUser1({
      //     variables: { email, password, confirmPassword },
      //   });
      // } catch (error) {
      //   console.log('fff', error.message);
      // }

      try {
        const result = await registrationUser1({
          variables: { email, password, confirmPassword },
        });
        console.log('result', result);

        if (result.data && result.data.user === null) {
          const errorMessage = result.errors[0].message; // Получаем текст ошибки
          console.log('errorMessage', errorMessage);
        }
        // Обработка успешного результата, если нужно
      } catch (error) {
        // console.log('error', error); // Здесь будет ваше сообщение об ошибке
        console.log('error=>', { ...error }); // Здесь будет ваше сообщение об ошибке
        // Здесь вы можете получить текст ошибки
        console.log('error.message', error.message);
        console.log('error.code', error.code);
        console.log('code', error.extensions?.code);
        // console.log(333, error.response);
        // console.log(444, error.errors);
      }
    },

    loading,
  };
};
