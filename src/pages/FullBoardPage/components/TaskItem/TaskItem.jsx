import { useState } from 'react';
import { format } from 'date-fns';

import Modal from 'components/Modal';

import { ReactComponent as DescriptionIcon } from 'assets/icons/description.svg';

import { useRemoveTask } from './useRemoveTask';

import TitleTeg from 'components/TitleTeg/TitleTeg';
import { TitleTexts } from 'const/descriptionTexts';
import TaskDetail from '../TaskDetail';

import styles from './TaskItem.module.scss';

const TaskItem = ({ task, provided }) => {
  // console.log('RENDER TaskItem');
  // console.log('RENDER TaskItem', task.id);
  // const { title, description, createdDate } = task;
  const { id, title, createdDate } = task;

  const [isOpenModal, setIsOpenModal] = useState(false);

  const removeTaskById = useRemoveTask();

  const customDate = format(new Date(createdDate), 'yyyy-MM-dd HH:mm');

  // const description = { isFulled: !!Math.round(Math.random()) };
  const description = { isFulled: true };

  return (
    <li
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={styles.task}
      // onClick={() => setIsOpenModal(true)}
      // role="presentation"
    >
      <div
        className={styles.mainContent}
        // ref={provided.innerRef}
        // {...provided.draggableProps}
        // {...provided.dragHandleProps}
        onClick={() => setIsOpenModal(true)}
        role="presentation"
      >
        {/* <p>{customDate}</p> */}
        <h4 className={styles.title}>{title}</h4>

        {description.isFulled && (
          <TitleTeg titleText={TitleTexts.TASK_DESCRIPTION}>
            <DescriptionIcon className={styles.descriptionIcon} />
          </TitleTeg>
        )}

        {/* <button onClick={() => removeTaskById(id)}>Remove task</button> */}
        {/* <button onClick={() => setIsOpenModal(true)}>Open Modal</button> */}
      </div>

      <Modal isOpenModal={isOpenModal} closeModal={() => setIsOpenModal(false)}>
        <TaskDetail
          taskId={id}
          taskTitle={title}
          descriptionText={description.text}
          onClose={() => setIsOpenModal(false)}
        />
      </Modal>
    </li>
  );
};

export default TaskItem;
// export default memo(TaskItem);
