import { useState } from 'react';

import { useAddTask } from './useAddTask';
import { noticeError } from 'helpers/showNotices';

const FormTask = ({ columnId }) => {
  const [value, setValue] = useState('');
  const { addTask, loading } = useAddTask();

  const onSubmit = async e => {
    e.preventDefault();
    if (loading) return;

    const valueTrim = value.trim();
    if (valueTrim.length === 0) return;

    try {
      await addTask(columnId, valueTrim);
      setValue('');
    } catch (error) {
      noticeError(error.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Title for this task..."
      />

      <button type="button" onClick={() => setValue('')}>
        X
      </button>
    </form>
  );
};

export default FormTask;
