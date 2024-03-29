import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { UPDATE_COLUMN_TITLE } from 'apollo/columns';
import { GET_FULL_BOARD } from 'apollo/boards';

export const useUpdateColumnTitle = () => {
  const { boardId } = useParams();

  const [updateColumnTitle, { error }] = useMutation(
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

  return (id, title) => updateColumnTitle({ variables: { id, title } });
};
