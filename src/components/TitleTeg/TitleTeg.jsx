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
