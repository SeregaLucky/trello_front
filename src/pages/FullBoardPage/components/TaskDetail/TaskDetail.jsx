import { useEffect, useRef, useState } from 'react';

import { useUpdateTaskTitle } from './useUpdateTaskTitle';

import styles from './TaskDetail.module.scss';
import EditorCustom from 'components/EditorCustom';
import { ButtonClose } from 'ui';

const TaskDetail = ({ taskId, taskTitle, descriptionText, onClose }) => {
  const [title, setTitle] = useState(taskTitle);

  const updateTaskTitle = useUpdateTaskTitle();

  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;

    const onBlurTitleInput = ({ target: { value } }) => {
      const valueTrim = value.trim();
      if (taskTitle === valueTrim) return;
      updateTaskTitle(taskId, valueTrim);
    };

    input.addEventListener('blur', onBlurTitleInput);

    return () => input.removeEventListener('blur', onBlurTitleInput);
  }, [taskId, taskTitle]);

  return (
    <div className={styles.taskDetail}>
      <h4 className={styles.taskTitle}>{taskTitle}</h4>

      <div className={styles.taskHeader}>
        <input
          ref={inputRef}
          className={styles.titleInput}
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <EditorCustom placeholder="Add a more detailed description…" />

        <ButtonClose
          type="button"
          size="medium"
          className={styles.buttonClose}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default TaskDetail;
