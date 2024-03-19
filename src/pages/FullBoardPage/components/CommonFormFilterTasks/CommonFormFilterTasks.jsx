import { memo, useRef } from 'react';

import CommonFilterTasks from './CommonFilterTasks';

const CommonFormFilterTasks = ({
  columns,
  isCommonSorted,
  doCommonSortByDate,
  setFilterColumnsByDate,
  setIsBlockedMoveTasks,
  setIsCommonSorted,
}) => {
  // console.log('RENDER CommonFormFilterTasks', isCommonSorted);

  const calendarMultiRef = useRef(null);

  const onSubmit = e => {
    e.preventDefault();

    const { startDate, endDate } = calendarMultiRef.current.getSelectedDates();

    doCommonSortByDate({ startDate, endDate });
  };

  const resetFilter = () => {
    calendarMultiRef.current.clearFilter();
    setFilterColumnsByDate(columns);
    setIsBlockedMoveTasks(false);
    setIsCommonSorted(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <CommonFilterTasks ref={calendarMultiRef} />

      <button
        type="submit"
        style={{ color: isCommonSorted ? 'orange' : '#000' }}
      >
        Sort
      </button>

      <button
        type="button"
        onClick={resetFilter}
        style={{ color: isCommonSorted ? 'orange' : '#000' }}
      >
        Reset
      </button>
    </form>
  );
};

export default CommonFormFilterTasks;

// export default memo(
//   CommonFormFilterTasks,
//   (_, nextProps) => !nextProps.isCommonSorted,
// );

// export default memo(CommonFormFilterTasks, (_, nextProps) => true);
