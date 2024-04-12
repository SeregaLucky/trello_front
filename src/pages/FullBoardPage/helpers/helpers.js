export const reorder = ({ list, startIndex, endIndex }) => {
  const result = [...list];
  const { 0: removedElement } = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removedElement);

  return result;
};

export const reorderTasks = ({ columns, source, destination }) => {
  const currentTasks = [...columns[source.droppableId].tasks];

  /*
   * MOVING TO SAME LIST
   */
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder({
      list: currentTasks,
      startIndex: source.index,
      endIndex: destination.index,
    });

    const dataOrderUpdated = {
      ...columns,
      [source.droppableId]: {
        ...columns[source.droppableId],
        tasks: reordered,
      },
    };

    return dataOrderUpdated;
  }

  /*
   * MOVING TO DIFFERENT LIST
   */
  const next = [...columns[destination.droppableId].tasks];
  const targetPrev = currentTasks[source.index];
  const targetUpdated = {
    ...targetPrev,
    columnId: { ...targetPrev.columnId, id: destination.droppableId },
  };

  // remove from original
  currentTasks.splice(source.index, 1);
  // insert into next
  next.splice(destination.index, 0, targetUpdated);

  const dataOrderUpdated = {
    ...columns,

    [source.droppableId]: {
      ...columns[source.droppableId],
      tasks: currentTasks,
    },

    [destination.droppableId]: {
      ...columns[destination.droppableId],
      tasks: next,
    },
  };

  return dataOrderUpdated;
};
