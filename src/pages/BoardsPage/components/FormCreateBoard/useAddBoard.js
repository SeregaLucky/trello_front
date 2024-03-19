import { useMutation } from '@apollo/client';

import { ADD_BOARD, ALL_BOARDS } from 'apollo/boards';

export const useAddBoard = () => {
  const [addBoardApollo, { error, loading }] = useMutation(ADD_BOARD, {
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

  return title => addBoardApollo({ variables: { title } });
};
