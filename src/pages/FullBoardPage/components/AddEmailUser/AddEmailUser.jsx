import { useState } from 'react';

import { useAddUserInBoard } from './useAddUserInBoard';

import { noticeError } from 'helpers/showNotices';

const AddEmailUser = ({ boardId }) => {
  const [email, setEmail] = useState('');
  const { addUserInBoard, loading } = useAddUserInBoard();

  const onSubmit = async e => {
    e.preventDefault();

    const emailTrim = email.trim();
    if (emailTrim.length === 0) return;

    try {
      await addUserInBoard(boardId, emailTrim);
      setEmail('');
    } catch (error) {
      noticeError(error.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        Add
      </button>
    </form>
  );
};

export default AddEmailUser;
