import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { GET_FULL_BOARD } from 'apollo/boards';
import { UPDATE_COLOR_COLUMN } from 'apollo/columns';

export const useUpdateColumnColor = () => {
  const { boardId } = useParams();

  const [updateColumnColor, { error }] = useMutation(
    UPDATE_COLOR_COLUMN,

    {
      update(cache, { data: { newColorColumn } }) {
        const { board } = cache.readQuery({
          query: GET_FULL_BOARD,
          variables: { id: boardId },
        });

        const { id, columnColor } = newColorColumn;

        cache.writeQuery({
          query: GET_FULL_BOARD,
          variables: { id: boardId },

          data: {
            board: {
              ...board,
              columns: board.columns.map(column =>
                column.id === id ? { ...column, columnColor } : column,
              ),
            },
          },
        });
      },
    },
  );

  return (id, columnColor) =>
    updateColumnColor({ variables: { id, columnColor } });
};
