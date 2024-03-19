import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_COLUMN } from 'apollo/columns';
import { GET_FULL_BOARD } from 'apollo/boards';

export const useAddColumn = () => {
  const { boardId } = useParams();
  // console.log('boardId', boardId);

  const [addColumn, { error, loading }] = useMutation(ADD_COLUMN, {
    update(cache, { data: { newColumn } }) {
      const { board } = cache.readQuery({
        query: GET_FULL_BOARD,
        variables: { id: boardId },
      });

      cache.writeQuery({
        query: GET_FULL_BOARD,
        variables: { id: boardId },

        data: {
          board: { ...board, columns: [...board.columns, newColumn] },
        },
      });
    },
  });

  return title => addColumn({ variables: { boardId, title } });
};
