import cn from 'classnames';

import styles from './ButtonClose.module.scss';

/**
 * @param {object} props
 * @param {string} props.type - "submit" | "button": button type
 * @param {string} props.size - "small" | "medium": button size
 * @param {string} props.className - additional class for button
 * @param {Function} props.onClose - function for close
 */
const ButtonClose = ({
  type = 'button',
  size = 'small',
  className,
  onClose,
}) => {
  return (
    <button
      className={cn(styles.buttonClose, styles[size], className)}
      type={type}
      onClick={onClose}
    >
      x
    </button>
  );
};

export default ButtonClose;
