import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { UPDATE_COLUMN_TITLE } from 'apollo/columns';
import { GET_FULL_BOARD } from 'apollo/boards';

import { noticeError } from 'helpers/showNotices';

export const useRegistrationUser = () => {
  const { boardId } = useParams();

  const [registrationUser, { error, loading }] = useMutation(
    UPDATE_COLUMN_TITLE,

    {
      update(cache, { data: { newColumnTitle } }) {
        const { board } = cache.readQuery({
          query: GET_FULL_BOARD,
          variables: { id: boardId },
        });

        const { id, title } = newColumnTitle;

        cache.writeQuery({
          query: GET_FULL_BOARD,
          variables: { id: boardId },

          data: {
            board: {
              ...board,

              columns: board.columns.map(column =>
                column.id === id ? { ...column, title } : column,
              ),
            },
          },
        });
      },
    },
  );

  if (error) {
    noticeError('Error');
  }

  return {
    // getUser: (login, password) => getUser(login, password),
    registrationUser: (login, password) => console.log(login, password),
    loading,
  };
};
