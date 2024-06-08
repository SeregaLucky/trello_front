import { useMutation } from '@apollo/client';

import { ADD_USER_IN_BOARD, ALL_BOARDS } from 'apollo/boards';

export const useAddUserInBoard = () => {
  const [addUserInBoardApollo, { loading }] = useMutation(ADD_USER_IN_BOARD, {
    update(cache, { data }) {
      const { boards } = cache.readQuery({ query: ALL_BOARDS });

      console.log('data', data);

      const { boardId, email } = data;

      cache.writeQuery({
        query: ALL_BOARDS,

        data: {
          // boards: [...boards, newBoard],
          // temporaryEmails: [],
          // confirmedEmails: [],
          boards: boards.map(board =>
            board.id === boardId
              ? {
                  ...board,
                }
              : board,
          ),
        },
      });
    },
  });

  return {
    addUserInBoard: (boardId, email) =>
      addUserInBoardApollo({ variables: { boardId, email } }),
    loading,
  };
};
