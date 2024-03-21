import { useMutation } from '@apollo/client';

import { LOGIN_USER } from 'apollo/auth';

import { noticeError } from 'helpers/showNotices';

import { useNavigation } from 'hooks/useNavigation';

/* IN PROGRESS */
export const useGetUser = () => {
  const { goToBoards } = useNavigation();

  const [loginUser, { error, loading }] = useMutation(
    LOGIN_USER,

    {
      update(cache, { data: { user } }) {},
    },
  );

  // console.log(111);
  // error ? noticeError('Error') : goToBoards();
  // noticeError('Error');

  return {
    // loginUser: (login, password) => loginUser(login, password),
    loginUser: (login, password) => console.log(login, password),
    loading: false,
  };
};
