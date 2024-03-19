import { memo } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import TasksInnerList from '../TasksInnerList';

const TasksList = ({ listId, tasks, isBlockedMoveTasks }) => {
  return (
    <Droppable droppableId={listId} type="QUOTE">
      {(dropProvided, dropSnapshot) => (
        <TasksInnerList
          tasks={tasks}
          dropProvided={dropProvided}
          droppableProps={dropProvided.droppableProps}
          isBlockedMoveTasks={isBlockedMoveTasks}
        />
      )}
    </Droppable>
  );
};

export default TasksList;
// export default memo(TasksList);
