import { TypeSortDateInColumn } from '../../const/constants';

const ControllersByFilter = ({ setCurrentFilterByDate }) => {
  return (
    <div style={{ height: '18px' }}>
      <button
        type="button"
        onClick={() => setCurrentFilterByDate(TypeSortDateInColumn.NEW)}
      >
        The newest
      </button>

      <button
        type="button"
        onClick={() => setCurrentFilterByDate(TypeSortDateInColumn.OLD)}
      >
        The oldest
      </button>

      <button
        type="button"
        onClick={() => setCurrentFilterByDate(TypeSortDateInColumn.RESET)}
      >
        x
      </button>
    </div>
  );
};

export default ControllersByFilter;
