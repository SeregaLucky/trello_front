import { useState } from 'react';

import { useAddColumn } from './useAddColumn';
import { noticeError } from 'helpers/showNotices';

const CustomColumnForm = () => {
  const { addColumn, loading } = useAddColumn();
  const [value, setValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (loading) return;

    const valueTrim = value.trim();
    if (valueTrim.length === 0) return;

    try {
      addColumn(valueTrim);
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
        placeholder="Column title..."
      />

      <button type="button" onClick={() => setValue('')}>
        X
      </button>
    </form>
  );
};

export default CustomColumnForm;
