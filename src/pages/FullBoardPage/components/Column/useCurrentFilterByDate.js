// import { useEffect, useState } from 'react';

// import { TypeSortDateInColumn } from '../../const/constants';

// const { NEW, OLD, RESET } = TypeSortDateInColumn;

// const useCurrentFilterByDate = ({
//   tasks,
//   setTasksByDate,
//   setIsBlockedMoveTasks,
// }) => {
//   const [currentFilterByDate, setCurrentFilterByDate] = useState(RESET);

//   useEffect(() => {
//     if (currentFilterByDate === NEW) {
//       setTasksByDate([...tasks].sort((a, b) => b.createdDate - a.createdDate));
//       setIsBlockedMoveTasks(true);
//       return;
//     }

//     if (currentFilterByDate === OLD) {
//       setTasksByDate([...tasks].sort((a, b) => a.createdDate - b.createdDate));
//       setIsBlockedMoveTasks(true);
//       return;
//     }

//     // if reset
//     setTasksByDate(tasks);
//     setIsBlockedMoveTasks(false);
//   }, [tasks, currentFilterByDate, setIsBlockedMoveTasks, setTasksByDate]);

//   return setCurrentFilterByDate;
// };

// export default useCurrentFilterByDate;
