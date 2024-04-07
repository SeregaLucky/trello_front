import { useMutation } from '@apollo/client';

import { LOGIN_USER } from 'apollo/auth';

import { noticeError } from 'helpers/showNotices';

import { useNavigation } from 'hooks/useNavigation';

/* IN PROGRESS */
export const useGetUser = () => {
  // const { goToBoards } = useNavigation();

  const [loginUser, { error, loading }] = useMutation(
    LOGIN_USER,

    // {
    //   update(cache, { data: { user } }) {},
    // },
  );

  return {
    // loginUser: async ({ login, password }) => {
    //   try {
    //     await loginUser({ variables: { login, password } });
    //   } catch (error) {
    //     console.log('error.message', error.message);
    //     throw new Error(error);
    //   }
    // },

    loginUser: ({ email, password }) =>
      loginUser({ variables: { email, password } }),

    loading,
  };
};
