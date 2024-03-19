import { Draggable } from 'react-beautiful-dnd';

import TaskItem from '../TaskItem';

const TasksInnerList = ({
  tasks,
  dropProvided,
  droppableProps,
  isBlockedMoveTasks,
}) => {
  // console.log('tasks', tasks);

  return (
    <ul ref={dropProvided.innerRef} {...droppableProps}>
      {tasks.map((task, index) => (
        <Draggable
          key={task.id}
          draggableId={task.id}
          index={index}
          isDragDisabled={isBlockedMoveTasks}
        >
          {(dragProvided, dragSnapshot) => (
            <TaskItem key={task.id} task={task} provided={dragProvided} />
          )}
        </Draggable>
      ))}

      {dropProvided.placeholder}
    </ul>
  );
};

export default TasksInnerList;
