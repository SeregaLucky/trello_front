import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Column from '../Column';
import AddEmailUser from '../AddEmailUser';
import CustomColumnForm from '../CustomColumnForm';

import { useMainDragAndDrop } from './hooks/useMainDragAndDrop';

import styles from './Table.module.scss';

const InnerBoard = ({ dataColumns, boardId }) => {
  const { columns, orderedColumns, onDragEnd } =
    useMainDragAndDrop(dataColumns);

  return (
    <div>
      <h2>Board4</h2>

      <AddEmailUser boardId={boardId} />

      <CustomColumnForm />

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="board" type="COLUMN" direction="horizontal">
          {provided => (
            <ul
              className={styles.listColumn}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {orderedColumns.map((columnId, index) => {
                const currentColumn = columns[columnId];

                if (!currentColumn) return null;

                return (
                  <Column
                    key={columnId}
                    columnId={columnId}
                    columnIndex={index}
                    column={currentColumn}
                  />
                );
              })}

              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default InnerBoard;
