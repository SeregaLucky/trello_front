import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { GET_FULL_BOARD } from 'apollo/boards';
import { REMOVE_COLUMN } from 'apollo/columns';

export const useRemoveColumn = () => {
  const { boardId } = useParams();

  const [removeColumn, { error }] = useMutation(REMOVE_COLUMN, {
    update(cache, { data: { removedColumn } }) {
      const { board } = cache.readQuery({
        query: GET_FULL_BOARD,
        variables: { id: boardId },
      });

      cache.writeQuery({
        query: GET_FULL_BOARD,
        variables: { id: boardId },

        data: {
          board: {
            ...board,
            columns: board.columns.filter(
              column => column.id !== removedColumn.id,
            ),
          },
        },
      });
    },
  });

  return columnId => removeColumn({ variables: { id: columnId } });
};
