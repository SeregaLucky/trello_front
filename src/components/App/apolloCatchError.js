import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';

export const apolloCatchError = () => {
  if (process.env.NODE_ENV !== 'production') {
    // Adds messages only in a dev environment
    loadDevMessages();
    loadErrorMessages();
  }
};
