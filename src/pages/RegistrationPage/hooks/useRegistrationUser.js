import { useMutation } from '@apollo/client';

import { REGISTRATION_USER } from 'apollo/auth';

import { noticeError } from 'helpers/showNotices';

import { useNavigation } from 'hooks/useNavigation';

/* IN PROGRESS */
export const useRegistrationUser = () => {
  const { goToBoards } = useNavigation();

  const [registrationUser, { error, loading }] = useMutation(
    REGISTRATION_USER,

    {
      update(cache, { data: { user } }) {},
    },
  );

  error ? noticeError('Error') : goToBoards();

  return {
    // getUser: (login, password) => getUser(login, password),
    registrationUser: (login, password) => console.log(login, password),
    loading,
  };
};
