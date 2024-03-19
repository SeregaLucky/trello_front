import { useState } from 'react';

import BoardItem from './components/BoardItem';
import FormCreateBoard from './components/FormCreateBoard';

import styles from './InnerBoards.module.scss';

const InnerBoards = ({ boards }) => {
  const [isShowBoardForm, setIsShowBoardForm] = useState(false);

  const favoriteBoards = boards.filter(({ isFavorite }) => isFavorite);

  return (
    <div>
      <h2>Boards</h2>

      {favoriteBoards.length > 0 && (
        <ul className={styles.list}>
          {favoriteBoards.map(({ id, title, isFavorite }) => (
            <BoardItem key={id} id={id} title={title} isFavorite={isFavorite} />
          ))}
        </ul>
      )}

      <ul className={styles.list}>
        {boards.map(({ id, title, isFavorite }) => (
          <BoardItem key={id} id={id} title={title} isFavorite={isFavorite} />
        ))}

        <li className={styles.item}>
          <button
            type="button"
            className={styles.buttonAdd}
            onClick={() => setIsShowBoardForm(!isShowBoardForm)}
          >
            Create new Board
          </button>
        </li>
      </ul>

      {isShowBoardForm && <FormCreateBoard />}
    </div>
  );
};

export default InnerBoards;
