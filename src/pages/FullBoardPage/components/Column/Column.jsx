import { useEffect, useRef, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import TasksList from '../TasksList';
import AdditionalInfoByColumn from './components/AdditionalInfoByColumn';
import FormTask from '../FormTask';

import { useUpdateColumnTitle } from './useUpdateColumnTitle';

import styles from './Column.module.scss';

// { id: nanoid(6), columnColors: '#BAF3DB' },
// { id: nanoid(6), columnColors: '#F8E6A0' },
// { id: nanoid(6), columnColors: '#FEDEC8' },
// { id: nanoid(6), columnColors: '#FFD5D2' },
// { id: nanoid(6), columnColors: '#DFD8FD' },

const Column = ({ columnId, columnIndex, column }) => {
  const { title: columnTitle, tasks, columnColor } = column;

  const [title, setTitle] = useState(columnTitle);
  const [isShowTextarea, setIsShowTextarea] = useState(false);

  const updateColumnTitle = useUpdateColumnTitle();

  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;

    if (!input) return;
    input.focus();

    const onBlurTitleInput = ({ target: { value } }) => {
      setIsShowTextarea(false);

      const valueTrim = value.trim();
      if (columnTitle === valueTrim) return;

      updateColumnTitle(columnId, valueTrim);
    };

    input.addEventListener('blur', onBlurTitleInput);

    return () => input.removeEventListener('blur', onBlurTitleInput);
  }, [columnTitle, columnId, isShowTextarea]);

  const textAreaAdjust = ({ target }) => {
    target.style.height = '32px';
    target.style.height = target.scrollHeight + 'px';
  };

  return (
    <Draggable draggableId={columnId} index={columnIndex}>
      {(provided, snapshot) => {
        return (
          <li
            className={styles.column}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div
              // ref={containerRef}
              className={styles.mainContent}
              style={{ backgroundColor: columnColor }}
              // ref={provided.innerRef}
              // {...provided.draggableProps}
              // {...provided.dragHandleProps}
            >
              <div className={styles.columnHeader}>
                {!isShowTextarea && (
                  <h3
                    className={styles.columnTitle}
                    onClick={() => setIsShowTextarea(true)}
                  >
                    {columnTitle}
                  </h3>
                )}

                {isShowTextarea && (
                  <textarea
                    ref={inputRef}
                    className={styles.textareaTitle}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    onKeyUp={textAreaAdjust}
                    onFocus={textAreaAdjust}
                  />
                )}

                {/* <textarea
                  ref={inputRef}
                  className={styles.textareaTitle}
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  onKeyUp={textAreaAdjust}
                  onFocus={textAreaAdjust}
                /> */}

                <AdditionalInfoByColumn
                  columnId={columnId}
                  columnColor={columnColor}
                />
              </div>

              <TasksList listId={columnId} tasks={tasks} />

              <FormTask columnId={columnId} />
            </div>
          </li>
        );
      }}
    </Draggable>
  );
};

export default Column;
// export default memo(Column);
