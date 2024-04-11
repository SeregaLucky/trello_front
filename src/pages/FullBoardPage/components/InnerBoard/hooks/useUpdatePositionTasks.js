import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { GET_FULL_BOARD } from 'apollo/boards';
import { UPDATE_POSITION_TASKS } from 'apollo/tasks';

export const useUpdatePositionTasks = () => {
  const { boardId } = useParams();

  const prevPositionsRef = useRef({});

  const [updatePositionTasks] = useMutation(
    UPDATE_POSITION_TASKS,

    {
      update(cache, { data: { newPositionTasks } }) {
        const { board } = cache.readQuery({
          query: GET_FULL_BOARD,
          variables: { id: boardId },
        });

        const dataTasksByColumnId = newPositionTasks.reduce((acc, item) => {
          if (!acc[item.columnId.id]) {
            acc[item.columnId.id] = [item];
            return acc;
          }

          acc[item.columnId.id].push(item);
          return acc;
        }, prevPositionsRef.current);

        prevPositionsRef.current = {};

        cache.writeQuery({
          query: GET_FULL_BOARD,
          variables: { id: boardId },

          data: {
            board: {
              ...board,

              columns: board.columns.map(column =>
                dataTasksByColumnId[column.id]
                  ? { ...column, tasks: dataTasksByColumnId[column.id] }
                  : column,
              ),
            },
          },
        });
      },
    },
  );

  return (newListPositions, prevColumnIds) => {
    prevPositionsRef.current = prevColumnIds;
    updatePositionTasks({ variables: { newListPositions } });
  };
};
