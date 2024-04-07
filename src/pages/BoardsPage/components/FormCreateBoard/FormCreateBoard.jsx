import { useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

import { useAddBoard } from './useAddBoard';

import { PATHS } from 'const/paths';

const FormCreateBoard = () => {
  const navigate = useNavigate();

  const [titleBoard, setTitleBoard] = useState('');

  const addBoard = useAddBoard();

  const onSubmitBoard = async e => {
    e.preventDefault();

    const titleBoardTrim = titleBoard.trim();
    if (titleBoardTrim.length === 0) return;

    const { data } = await addBoard(titleBoardTrim);

    setTitleBoard('');

    navigate(
      `${generatePath(PATHS.FULL_BOARD.path, { boardId: data.newBoard.id })}`,
    );
  };

  return (
    <form onSubmit={onSubmitBoard}>
      <input
        type="text"
        value={titleBoard}
        onChange={e => setTitleBoard(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default FormCreateBoard;
