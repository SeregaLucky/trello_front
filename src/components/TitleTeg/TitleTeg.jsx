/*
 * DOCS Tooltip: https://react-tooltip.com/docs/getting-started
 */

import { useId } from 'react';
import { Tooltip } from 'react-tooltip';

import styles from './TitleTeg.module.scss';

const TitleTeg = ({ children, titleText }) => {
  const tooltipId = useId();

  return (
    <div
      className={styles.container}
      data-tooltip-id={tooltipId}
      data-tooltip-content={titleText}
      data-tooltip-place="bottom"
    >
      {children}

      <Tooltip id={tooltipId} className={styles.aaa} />
    </div>
  );
};

export default TitleTeg;

//
//
//
//

// import styles from './TitleTeg.module.scss';

// const TitleTeg = ({ children, titleText }) => {
//   return (
//     <div className={styles.container} data-title={titleText}>
//       {children}
//     </div>
//   );
// };

// export default TitleTeg;

//
//
//
//

// import { useEffect, useRef, useState } from 'react';

// import styles from './TitleTeg.module.scss';

// const TitleTeg = ({ children, titleText }) => {
//   const [isShowTitle, setIsShowTitle] = useState(false);

//   const idST = useRef();

//   const onMouseEnter = () => {
//     idST.current = setTimeout(() => {
//       setIsShowTitle(true);
//     }, 150);
//   };

//   const onMouseLeave = () => {
//     setIsShowTitle(false);
//     clearTimeout(idST.current);
//   };

//   useEffect(() => () => clearTimeout(idST.current), []);

//   return (
//     <div className={styles.container}>
//       <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
//         {children}
//       </div>
//       {isShowTitle && <span className={styles.titleText}>{titleText}</span>}
//     </div>
//   );
// };

// export default TitleTeg;
