import { useRef, useState } from 'react';

import { ButtonClose } from 'ui';
import PopOver from './PopOver';

import { getSId } from 'helpers/getUniqId';

import { useUpdateColumnColor } from './hooks/useUpdateColumnColor';
import { useRemoveColumn } from './hooks/useRemoveColumn';

import styles from './AdditionalInfoByColumn.module.scss';

const columnColors = [
  { id: getSId(), columnColor: '#f1f2f4' },
  { id: getSId(), columnColor: '#BAF3DB' },
  { id: getSId(), columnColor: '#F8E6A0' },
  { id: getSId(), columnColor: '#FEDEC8' },
  { id: getSId(), columnColor: '#FFD5D2' },
  { id: getSId(), columnColor: '#DFD8FD' },

  // { id: nanoid(6), columnColors: '#4BCE97' },
  // { id: nanoid(6), columnColors: '#F5CD47' },
  // { id: nanoid(6), columnColors: '#FEA362' },
  // { id: nanoid(6), columnColors: '#F87168' },
  // { id: nanoid(6), columnColors: '#9F8FEF' },
  // { id: nanoid(6), columnColors: '#579DFF' },
];

const InfoAboutColumn = ({
  columnId,
  columnColor,
  closePopOver,
  parentRef,
}) => {
  const [isShowChangeColors, setIsShowChangeColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState(columnColor);

  const containerRef = useRef(null);

  const updateColumnColor = useUpdateColumnColor();
  const { removeColumn, loading } = useRemoveColumn();

  const getCoords = elem => {
    let box = elem.getBoundingClientRect();

    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
    };
  };
  const { top, right } = getCoords(parentRef.current);

  return (
    <PopOver containerRef={containerRef} closePopOver={closePopOver}>
      <div
        className={styles.mainContent}
        ref={containerRef}
        style={{ top: `${top + 46}px`, left: `${right - 300}px` }}
      >
        <div className={styles.listHeader}>
          <span className={styles.title}>List actions</span>

          <ButtonClose
            type="button"
            onClose={closePopOver}
            size="small"
            className={styles.buttonClose}
          />
        </div>

        <ul>
          <li>
            <button
              className={styles.buttonAction}
              type="button"
              onClick={() => setIsShowChangeColors(!isShowChangeColors)}
            >
              {isShowChangeColors ? 'Hide colors' : 'Show colors'}
            </button>
            {isShowChangeColors && (
              <ul>
                {columnColors.map(({ id, columnColor }) => (
                  <li key={id} className={styles.colorItem}>
                    <input
                      type="radio"
                      id={id}
                      className={styles.colorInput}
                      value={columnColor}
                      checked={selectedColor === columnColor}
                      onChange={() => setSelectedColor(columnColor)}
                    />

                    <button
                      type="button"
                      onClick={() => updateColumnColor(columnId, columnColor)}
                    >
                      <label
                        htmlFor={id}
                        className={styles.colorLabel}
                        style={{ backgroundColor: columnColor }}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <button
              className={styles.buttonAction}
              type="button"
              onClick={() => removeColumn(columnId)}
              disabled={loading}
            >
              Archive this list
            </button>
          </li>
        </ul>
      </div>
    </PopOver>
  );
};

export default InfoAboutColumn;
