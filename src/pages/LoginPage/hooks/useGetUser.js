import { useMutation } from '@apollo/client';

import { LOGIN_USER } from 'apollo/auth';

/* IN PROGRESS */
export const useGetUser = () => {
  const [loginUser, { loading }] = useMutation(
    LOGIN_USER,

    // {
    //   update(cache, { data: { user } }) {},
    // },
  );

  return {
    loginUser: ({ email, password }) =>
      loginUser({ variables: { email, password } }),

    loading,
  };
};
