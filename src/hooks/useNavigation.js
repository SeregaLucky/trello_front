import { useNavigate } from 'react-router';

import { Urls } from 'helpers/urls';

/**
 * Hook for navigating the application
 * The functions that it returns can be used, for example,
 * ===> on a click events or inside react effects <===
 * @returns {Object} An object with navigation methods
 */
export const useNavigation = () => {
  const navigate = useNavigate();

  const goToLogin = () => navigate(Urls.getLoginURL());

  const goToRegistration = () => navigate(Urls.getRegistrationURL());

  return {
    goToLogin,
    goToRegistration,
  };
};
