import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { GET_FULL_BOARD } from 'apollo/boards';
import { UPDATE_POSITION_COLUMNS } from 'apollo/columns';

export const useUpdatePositionColumns = () => {
  const { boardId } = useParams();

  const [updatePositionColumns, { error }] = useMutation(
    UPDATE_POSITION_COLUMNS,

    {
      update(cache, { data: { newPositionColumns } }) {
        const { board } = cache.readQuery({
          query: GET_FULL_BOARD,
          variables: { id: boardId },
        });

        const dataColumns = board.columns.reduce((acc, item) => {
          acc[item.id] = item;
          return acc;
        }, {});

        cache.writeQuery({
          query: GET_FULL_BOARD,
          variables: { id: boardId },

          data: {
            board: {
              ...board,

              columns: newPositionColumns.map(({ id, position }) => {
                const currentColumn = dataColumns[id];
                return { ...currentColumn, position };
              }),
            },
          },
        });
      },
    },
  );

  return newListPositions =>
    updatePositionColumns({ variables: { newListPositions } });
};

//
//
//
//

// import { useMutation } from '@apollo/client';
// import { GET_FULL_BOARD } from 'apollo/boards';
// import { ALL_COLUMNS, UPDATE_POSITION_COLUMNS } from 'apollo/columns';
// import { useParams } from 'react-router-dom';

// export const useUpdatePositionColumns = () => {
//   const { boardId } = useParams();
//   console.log(boardId);

//   const [updatePositionColumnsApollo, { error }] = useMutation(
//     UPDATE_POSITION_COLUMNS,

//     {
//       update(cache, { data: { updatePositionColumns } }) {
//         console.log('updatePositionColumns', updatePositionColumns);
//         console.log('cache.readQuery', cache.readQuery);
//         // const { columns } = cache.readQuery({ query: ALL_COLUMNS });
//         // const data = cache.readQuery({ query: ALL_COLUMNS });
//         const data = cache.readQuery({
//           query: GET_FULL_BOARD,
//           variables: { id: boardId },
//         });
//         console.log('data', data);
//         const { columns } = data;

//         const dataColumns = columns.reduce((acc, item) => {
//           acc[item.id] = item;
//           return acc;
//         }, {});

//         cache.writeQuery({
//           query: ALL_COLUMNS,

//           data: {
//             // columns: columns.filter(column => column.id !== removeColumn.id),
//             columns: updatePositionColumns.map(({ id, position }) => {
//               const currentColumn = dataColumns[id];

//               return { ...currentColumn, position };
//             }),
//           },
//         });
//       },
//     },
//   );

//   const updatePositionColumns = newListPositions => {
//     updatePositionColumnsApollo({ variables: { newListPositions } });
//   };

//   return updatePositionColumns;
// };
