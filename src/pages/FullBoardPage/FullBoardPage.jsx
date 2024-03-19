import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { GET_FULL_BOARD } from 'apollo/boards';
import InnerFullBoard from './InnerFullBoard';

const FullBoardPage = () => {
  const { boardId } = useParams();
  // console.log('boardId', boardId);

  const { data, loading, error } = useQuery(GET_FULL_BOARD, {
    variables: { id: boardId },
  });

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Error...</h3>;
  }

  // console.log('data.board', data.board);

  return <InnerFullBoard board={data.board} />;
};

export default FullBoardPage;
