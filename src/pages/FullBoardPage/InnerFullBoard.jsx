import InnerBoard from './components/InnerBoard';

const InnerFullBoard = ({ board }) => {
  const dataColumns = board.columns.reduce((acc, column) => {
    acc[column.id] = column;
    return acc;
  }, {});

  return (
    <div>
      <h3>InnerFullBoard</h3>

      <InnerBoard dataColumns={dataColumns} boardId={board.id} />
    </div>
  );
};

export default InnerFullBoard;
