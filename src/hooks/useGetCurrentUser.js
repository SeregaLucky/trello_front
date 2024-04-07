import { useQuery } from '@apollo/client';
import { CURRENT_USER } from 'apollo/user';

export const useGetCurrentUser = () => {
  const { data, loading, error } = useQuery(CURRENT_USER);

  return { data, loading, error };
};
