import { useMutation } from '@apollo/client';

import { ADD_BOARD, ALL_BOARDS } from 'apollo/boards';

export const useAddBoard = () => {
  const [addBoardApollo, { loading }] = useMutation(ADD_BOARD, {
    update(cache, { data: { newBoard } }) {
      const { boards } = cache.readQuery({ query: ALL_BOARDS });

      cache.writeQuery({
        query: ALL_BOARDS,

        data: {
          boards: [...boards, newBoard],
        },
      });
    },
  });

  return {
    addBoard: (title, email) => addBoardApollo({ variables: { title, email } }),
    loading,
  };
};
