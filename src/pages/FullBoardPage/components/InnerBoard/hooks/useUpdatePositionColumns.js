import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { GET_FULL_BOARD } from 'apollo/boards';
import { UPDATE_POSITION_COLUMNS } from 'apollo/columns';

export const useUpdatePositionColumns = () => {
  const { boardId } = useParams();

  const [updatePositionColumns, { error }] = useMutation(
    UPDATE_POSITION_COLUMNS,

    {
      update(cache, { data: { newPositionColumns } }) {
        const { board } = cache.readQuery({
          query: GET_FULL_BOARD,
          variables: { id: boardId },
        });

        const dataColumns = board.columns.reduce((acc, item) => {
          acc[item.id] = item;
          return acc;
        }, {});

        cache.writeQuery({
          query: GET_FULL_BOARD,
          variables: { id: boardId },

          data: {
            board: {
              ...board,

              columns: newPositionColumns.map(({ id, position }) => {
                const currentColumn = dataColumns[id];
                return { ...currentColumn, position };
              }),
            },
          },
        });
      },
    },
  );

  return newListPositions =>
    updatePositionColumns({ variables: { newListPositions } });
};
