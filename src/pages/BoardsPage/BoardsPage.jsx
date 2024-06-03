import { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import InnerBoards from './InnerBoards';

import { ALL_BOARDS } from 'apollo/boards';

import { noticeError } from 'helpers/showNotices';

import { useNavigation } from 'hooks/useNavigation';
import { CURRENT_USER } from 'apollo/user';

const BoardsPage = () => {
  const { data, loading, error } = useQuery(ALL_BOARDS);
  // const { data, loading, error } = useQuery(CURRENT_USER);
  const { goToLogin } = useNavigation();

  console.log('data', data);

  useEffect(() => {
    if (error?.message === 'You are not authorized to perform this action') {
      noticeError(error?.message);
      goToLogin();
    }
  }, [error?.message]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    // const errorCode = error.extensions?.code; // Получаем код ошибки
    // console.log('errorCode', errorCode);
    const { message, ...rest } = error;
    // console.log('graphQLErrors', rest.graphQLErrors[0].extensions.code);
    // console.log('extensions', error.extensions);
    // console.log('code', error.extensions?.code);

    if (message === 'You are not authorized to perform this action') {
      return null;
    }

    return (
      <div>
        <h3>Error...</h3>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <InnerBoards
      boards={data.boards}
      // boards={data.currentUser.boards}
    />
  );
};

export default BoardsPage;
