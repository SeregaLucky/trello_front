import { useState } from 'react';

import { useAddColumn } from './useAddColumn';

const CustomColumnForm = () => {
  const addColumn = useAddColumn();

  // console.log('RENDER CustomColumnForm');
  const [value, setValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    const valueTrim = value.trim();
    if (valueTrim.length === 0) return;

    addColumn(valueTrim);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Column title..."
      />

      {/* <button type="button" onClick={() => setIsShowColumnForm(false)}>
        X
      </button> */}
    </form>
  );
};

export default CustomColumnForm;
