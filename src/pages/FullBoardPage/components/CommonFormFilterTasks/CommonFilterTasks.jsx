import { forwardRef, memo, useImperativeHandle, useState } from 'react';

const CommonFilterTasks = (_, ref) => {
  // console.log('RENDER CommonFilterTasks');

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useImperativeHandle(
    ref,
    () => ({
      getSelectedDates: () => ({ startDate, endDate }),

      clearFilter: () => {
        setStartDate('');
        setEndDate('');
      },
    }),
    [endDate, startDate],
  );

  return (
    <>
      <input
        type="date"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
      />

      <input
        type="date"
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
      />
    </>
  );
};

// export default forwardRef(CommonFilterTasks);
export default memo(forwardRef(CommonFilterTasks, {}));
