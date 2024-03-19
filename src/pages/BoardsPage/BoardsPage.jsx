import { useQuery } from '@apollo/client';

import InnerBoards from './InnerBoards';

import { ALL_BOARDS } from 'apollo/boards';

const BoardsPage = () => {
  const { data, loading, error } = useQuery(ALL_BOARDS);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return (
      <div>
        <h3>Error...</h3>
        <p>{error.message}</p>
      </div>
    );
  }

  return <InnerBoards boards={data.boards} />;
};

export default BoardsPage;
