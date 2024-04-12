import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { GET_FULL_BOARD } from 'apollo/boards';
import { ADD_TASK } from 'apollo/tasks';

export const useAddTask = () => {
  const { boardId } = useParams();

  const [addTask, { error, loading }] = useMutation(ADD_TASK, {
    update(cache, { data: { newTask } }) {
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
              column.id === newTask.columnId.id
                ? { ...column, tasks: [...column.tasks, newTask] }
                : column,
            ),
          },
        },
      });
    },
  });

  return {
    addTask: (columnId, title) => addTask({ variables: { columnId, title } }),
    loading,
  };
};
