import { nanoid } from 'nanoid';

/**
 * Get small uniq id. Length 6 characters
 * @returns {string} - uniq id
 */
export const getSId = () => nanoid(6);
