import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { GET_FULL_BOARD } from 'apollo/boards';
import { REMOVE_TASK } from 'apollo/tasks';

export const useRemoveTask = () => {
  const { boardId } = useParams();

  const [removeTask, { error }] = useMutation(REMOVE_TASK, {
    update(cache, { data: { removedTask } }) {
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

            columns: board.columns.map(column =>
              column.id === removedTask.columnId.id
                ? {
                    ...column,
                    tasks: column.tasks.filter(
                      task => task.id !== removedTask.id,
                    ),
                  }
                : column,
            ),
          },
        },
      });
    },
  });

  return id => removeTask({ variables: { id } });
};
