import { useState } from 'react';

import { useAddBoard } from './useAddBoard';

import { useNavigation } from 'hooks/useNavigation';

import { noticeError } from 'helpers/showNotices';
import { useGetCurrentUser } from 'hooks/useGetCurrentUser';

const FormCreateBoard = () => {
  const { goToFullBoard } = useNavigation();
  const [titleBoard, setTitleBoard] = useState('');
  const { addBoard, loading } = useAddBoard();

  // Потом как то по нормалнее переделать
  // Нету проверки сейчас на ошибку и забержку
  const { data: dataUser } = useGetCurrentUser();

  const onSubmitBoard = async e => {
    e.preventDefault();

    const titleBoardTrim = titleBoard.trim();
    if (titleBoardTrim.length === 0) return;

    try {
      const { data } = await addBoard(
        titleBoardTrim,
        dataUser.currentUser.email,
      );

      setTitleBoard('');
      goToFullBoard(data.newBoard.id);
    } catch (error) {
      noticeError(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitBoard}>
      <input
        type="text"
        value={titleBoard}
        onChange={e => setTitleBoard(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        Add
      </button>
    </form>
  );
};

export default FormCreateBoard;
