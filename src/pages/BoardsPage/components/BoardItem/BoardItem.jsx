import { Link } from 'react-router-dom';

import styles from './BoardItem.module.scss';

const BoardItem = ({ id, title, isFavorite }) => {
  return (
    <li className={styles.item}>
      <Link to={id} className={styles.link}>
        <h3 className={styles.title}>{title}</h3>

        <span>{isFavorite ? '\\e967' : '\\e967'}</span>
      </Link>
    </li>
  );
};

export default BoardItem;
