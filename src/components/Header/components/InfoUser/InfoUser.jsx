import { useGetCurrentUser } from 'hooks/useGetCurrentUser';

const InfoUser = () => {
  const { data, loading, error } = useGetCurrentUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const { email } = data.currentUser;

  return <span>{email}</span>;
};

export default InfoUser;
