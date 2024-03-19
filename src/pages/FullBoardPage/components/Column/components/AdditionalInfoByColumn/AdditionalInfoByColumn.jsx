import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { ReactComponent as ThreeDotsIcon } from 'assets/icons/three-dots.svg';

import { getSId } from 'helpers/getUniqId';

import { useUpdateColumnColor } from './useUpdateColumnColor';
import { useRemoveColumn } from './useRemoveColumn';

import styles from './AdditionalInfoByColumn.module.scss';
import { useOnActionsOutside } from 'hooks/useOnActionsOutside';
import { Refs } from 'const/refs';
import { ButtonClose } from 'ui';

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

// const PopOver = ({ children, containerRef, closePopOver }) => {
const PopOver = ({ children, containerRef, closePopOver }) => {
  console.log('PopOver');
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   const onClick = e => {
  //     if (containerRef.current.contains(e.target)) return;
  //     closePopOver();
  //   };

  //   document.addEventListener('click', onClick);
  //   return () => document.removeEventListener('click', onClick);
  // }, []);

  useEffect(() => {
    const onListener = e => {
      if (containerRef.current?.contains(e.target)) return;
      closePopOver(e);
    };

    document.addEventListener('mousedown', onListener);
    document.addEventListener('touchstart', onListener);

    return () => {
      document.removeEventListener('mousedown', onListener);
      document.removeEventListener('touchstart', onListener);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = e => {
      if (e.key !== 'Escape') return;
      closePopOver(e);
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return createPortal(
    // <span ref={containerRef}>{children}</span>,
    children,
    Refs.POP_OVER_ROOT,
  );
};

const Bbbbbb = ({ columnId, columnColor, closePopOver, parentRef }) => {
  const [isShowChangeColors, setIsShowChangeColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState(columnColor);
  const [aaa] = useState(() => parentRef.current.getBoundingClientRect());

  const containerRef = useRef(null);

  // useOnActionsOutside(containerRef, closePopOver);

  const updateColumnColor = useUpdateColumnColor();
  const removeColumnById = useRemoveColumn();

  // useEffect(() => {
  //   console.log(parentRef.current?.getBoundingClientRect());
  // });

  console.log('aaa', aaa);
  const { top, right } = aaa;

  function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    console.log('window.pageXOffset', box.right, window.pageXOffset);

    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset,
    };
  }

  console.log('getCoords', getCoords(parentRef.current));
  const tt = getCoords(parentRef.current);

  return (
    <PopOver containerRef={containerRef} closePopOver={closePopOver}>
      <div
        className={styles.mainContent}
        ref={containerRef}
        // style={{ top: `${top + 46}px`, left: `${right - 32}px` }}
        style={{ top: `${tt.top + 46}px`, left: `${tt.right - 32}px` }}
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
              onClick={() => removeColumnById(columnId)}
            >
              Archive this list
            </button>
          </li>
        </ul>
      </div>
    </PopOver>
  );
};

const AdditionalInfoByColumn = ({ columnId, columnColor }) => {
  const [isShowPopOver, setIsShowPopOver] = useState(false);

  const parentRef = useRef(null);

  // useEffect(() => {
  //   console.log(parentRef.current?.getBoundingClientRect());
  // });

  return (
    // <div className={styles.container} ref={parentRef}>
    <>
      <button
        ref={parentRef}
        className={styles.buttonToggleMoreInfo}
        type="button"
        onClick={() => setIsShowPopOver(!isShowPopOver)}
      >
        <ThreeDotsIcon />
      </button>

      {isShowPopOver && (
        <Bbbbbb
          columnId={columnId}
          columnColor={columnColor}
          closePopOver={() => setIsShowPopOver(false)}
          parentRef={parentRef}
        />
      )}
    </>
    // </div>
  );
};

export default AdditionalInfoByColumn;
