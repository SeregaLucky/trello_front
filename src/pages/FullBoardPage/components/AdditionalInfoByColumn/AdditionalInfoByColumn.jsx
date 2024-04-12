import { useRef, useState } from 'react';

import InfoAboutColumn from './InfoAboutColumn';
import { ReactComponent as ThreeDotsIcon } from 'assets/icons/three-dots.svg';

import styles from './AdditionalInfoByColumn.module.scss';

const AdditionalInfoByColumn = ({ columnId, columnColor }) => {
  const [isShowPopOver, setIsShowPopOver] = useState(false);

  const parentRef = useRef(null);

  return (
    <>
      <button
        ref={parentRef}
        className={styles.buttonToggleMoreInfo}
        type="button"
        onClick={() => setIsShowPopOver(!isShowPopOver)}
        // onClick={() => setIsShowPopOver(true)}
      >
        <ThreeDotsIcon />
      </button>

      {isShowPopOver && (
        <InfoAboutColumn
          columnId={columnId}
          columnColor={columnColor}
          closePopOver={() => setIsShowPopOver(false)}
          parentRef={parentRef}
        />
      )}
    </>
  );
};

export default AdditionalInfoByColumn;
