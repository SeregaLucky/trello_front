import { Slide, toast } from 'react-toastify';

const options = {
  position: 'top-right',
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
  transition: Slide,
};

/**
 * Shows a notification on success
 * @param {string} text - text for notification success
 */
export const noticeSuccess = text => {
  toast.success(text, options);
};

/**
 * Shows a notification on error
 * @param {string} text - text for notification error
 */
export const noticeError = text => {
  toast.error(text, options);
};
