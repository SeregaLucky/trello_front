import { useEffect, useRef, useState } from 'react';

import { useUpdatePositionColumns } from './useUpdatePositionColumns';
import { useUpdatePositionTasks } from './useUpdatePositionTasks';

import { reorder, reorderTasks } from 'pages/FullBoardPage/helpers/helpers';

export const useMainDragAndDrop = (dataColumns, columnsList) => {
  const [columns, setColumns] = useState(dataColumns);
  const [orderedColumns, setOrderedColumns] = useState(() =>
    Object.keys(dataColumns),
  );
  // const [columns, setColumns] = useState(() =>
  //   columnsList.reduce((acc, column) => {
  //     acc[column.id] = column;
  //     return acc;
  //   }, {}),
  // );

  // const [orderedColumns, setOrderedColumns] = useState(() =>
  //   columnsList.map(({ id }) => id),
  // );

  const isFirstRenderRef = useRef(true);
  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }

    setColumns(dataColumns);
    setOrderedColumns(Object.keys(dataColumns));
  }, [dataColumns]);

  const updatePositionColumns = useUpdatePositionColumns();
  const updatePositionTasks = useUpdatePositionTasks();

  const onDragEnd = result => {
    // console.log('result', result);

    // dropped nowhere
    if (!result.destination) return;

    const { source, destination, type } = result;

    // did not move anywhere - can bail early
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // reordering column
    if (type === 'COLUMN') {
      const reorderedOrder = reorder({
        list: orderedColumns,
        startIndex: source.index,
        endIndex: destination.index,
      });

      setOrderedColumns(reorderedOrder);

      const newColumnsList = reorderedOrder.map((columnId, idx) => ({
        id: dataColumns[columnId].id,
        position: idx + 1,
      }));

      updatePositionColumns(newColumnsList);

      return;
    }

    // reordering task
    const currentColumns = reorderTasks({
      columns,
      source,
      destination,
    });

    // console.log('currentColumns', currentColumns);

    let newPositionsTasks = [];

    // reordering tasks in one column
    if (source.droppableId === destination.droppableId) {
      newPositionsTasks = currentColumns[source.droppableId].tasks.map(
        ({ id, columnId }, idx) => ({
          id,
          columnId: columnId.id,
          position: idx + 1,
        }),
      );

      setColumns(currentColumns);
      // updatePositionTasks(newPositionsTasks, [source.droppableId]);
      updatePositionTasks(newPositionsTasks, { [source.droppableId]: [] });
      return;
    }

    // reordering tasks without columns
    newPositionsTasks = [
      ...currentColumns[source.droppableId].tasks.map(
        ({ id, columnId }, idx) => ({
          id,
          position: idx + 1,
          columnId: columnId.id,
        }),
      ),
      ...currentColumns[destination.droppableId].tasks.map(
        ({ id, columnId }, idx) => ({
          id,
          position: idx + 1,
          columnId: columnId.id,
        }),
      ),
    ];

    setColumns(currentColumns);
    // updatePositionTasks(newPositionsTasks, [
    //   source.droppableId,
    //   destination.droppableId,
    // ]);
    updatePositionTasks(newPositionsTasks, {
      [source.droppableId]: [],
      [destination.droppableId]: [],
    });
  };

  return {
    columns,
    orderedColumns,

    onDragEnd,
  };
};
