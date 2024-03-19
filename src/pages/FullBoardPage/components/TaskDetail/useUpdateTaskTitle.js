import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { GET_FULL_BOARD } from 'apollo/boards';
import { UPDATE_TITLE_TASK } from 'apollo/tasks';

export const useUpdateTaskTitle = () => {
  const { boardId } = useParams();

  const [updateTaskTitle, { error }] = useMutation(
    UPDATE_TITLE_TASK,

    {
      update(cache, { data: { newTaskTitle } }) {
        const { board } = cache.readQuery({
          query: GET_FULL_BOARD,
          variables: { id: boardId },
        });

        const { id, columnId, title } = newTaskTitle;

        cache.writeQuery({
          query: GET_FULL_BOARD,
          variables: { id: boardId },

          data: {
            board: {
              ...board,

              columns: board.columns.map(column =>
                column.id === columnId.id
                  ? {
                      ...column,
                      tasks: column.tasks.map(task =>
                        task.id === id ? { ...task, title } : task,
                      ),
                    }
                  : column,
              ),
            },
          },
        });
      },
    },
  );

  return (id, title) => updateTaskTitle({ variables: { id, title } });
};
