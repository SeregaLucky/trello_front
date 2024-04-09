import { useMutation } from '@apollo/client';

import { REGISTRATION_USER } from 'apollo/auth';

/* IN PROGRESS */
export const useRegistrationUser = () => {
  const [registrationUser, { loading }] = useMutation(
    REGISTRATION_USER,

    // {
    //   update(cache, { data: { user } }) {
    //     console.log('user', user);
    //   },
    // },
  );

  return {
    registrationUser: async ({ email, password, confirmPassword }) =>
      registrationUser({ variables: { email, password, confirmPassword } }),

    loading,
  };
};
