import { useState } from 'react';
import cn from 'classnames';

import { ReactComponent as EyeIcon } from 'assets/icons/eye-icon.svg';

import styles from './Input.module.scss';

/**
 * @param {Object} props - props for component
 * @param {string} [props.type='text'] - type input: "text" | "password"
 * @param {string} [props.id=undefined] - uniq id
 * @param {string} props.placeholder - text for placeholder
 * @param {boolean} [props.autoFocus=undefined] - should I enable autofocus or not?
 * @param {object} props.register - object from react-hook-form
 * @param {object} props.error - object error
 */
const Input = ({
  type = 'text',
  id,
  placeholder,
  autoFocus,
  register,
  error,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(true);

  const isPasswordInput = type === 'password';

  return (
    <div className={styles.container}>
      <input
        className={cn(styles.customInput, {
          [styles.password]: isPasswordInput,
        })}
        type={isPasswordInput && isShowPassword ? 'text' : type}
        id={id}
        placeholder={placeholder}
        autoFocus={autoFocus}
        {...register}
      />

      {isPasswordInput && (
        <button
          className={styles.buttonShowPass}
          type="button"
          onClick={() => setIsShowPassword(!isShowPassword)}
        >
          <span
            className={cn(styles.containerEyeIcon, {
              [styles.closeEye]: isShowPassword,
            })}
          >
            <EyeIcon />
          </span>
        </button>
      )}

      {error?.message && (
        <span className={styles.errorMessage}>{error.message}</span>
      )}
    </div>
  );
};

export default Input;
