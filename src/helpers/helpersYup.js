export const MIN_PASSWORD_LENGTH = 8;

/**
 * Messages for forms in case of errors
 */
export const YupMesses = {
  REQUIRED: field => `${field} can't be empty`,
  EMAIL: 'Must be a valid email',
  MIN_STR: number => `Should be at least ${number} characters long`,
  MIN_ONE_NUMERIC: 'Contain at least one numeric',
  MIN_ONE_UPPERCASE_LETTER: 'Contain at least one uppercase letter',
  MIN_ONE_LOWERCASE_LETTER: 'Contain at least one lowercase letter',
};

/**
 * Placeholders text
 */
export const YupPlaceholders = {
  LOGIN: 'Login...',
  PASSWORD: 'Password...',
  CONFIRM_PASSWORD: 'Confirm Password...',
};
