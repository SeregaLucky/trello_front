import { useState } from 'react';

import { useAddTask } from './useAddTask';

const FormTask = ({ columnId }) => {
  const [value, setValue] = useState('');

  const addTask = useAddTask();

  const onSubmit = e => {
    e.preventDefault();

    const valueTrim = value.trim();
    if (valueTrim.length === 0) return;

    addTask(columnId, valueTrim);
    setValue('');
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
