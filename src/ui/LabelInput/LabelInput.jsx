import { useId } from 'react';

import { Input } from 'ui';

import styles from './LabelInput.module.scss';

/**
 * @param {Object} props - props for component
 * @param {string} [props.type='text'] - type input: "text" | "password"
 * @param {string} props.placeholder - text for placeholder
 * @param {boolean} [props.autoFocus=undefined] - should I enable autofocus or not?
 * @param {string} props.labelText - text to be substituted in label
 * @param {object} props.register - object from react-hook-form
 * @param {object} props.error - object error
 */
const LabelInput = ({
  type = 'text',
  placeholder,
  autoFocus,
  labelText,
  register,
  error,
}) => {
  const uniqId = useId();

  return (
    <div>
      <label className={styles.labelText} htmlFor={uniqId}>
        {labelText}
      </label>

      <Input
        type={type}
        id={uniqId}
        placeholder={placeholder}
        autoFocus={autoFocus}
        register={register}
        error={error}
      />

      {/* <input
        type={type}
        id={uniqId}
        placeholder={placeholder}
        autoFocus={autoFocus}
        {...register}
      /> */}

      {error?.message && <span>{error.message}</span>}
    </div>
  );
};

export default LabelInput;
