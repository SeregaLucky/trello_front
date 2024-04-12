import { useNavigate } from 'react-router';

import { Urls } from 'helpers/urls';

/**
 * Hook for navigating the application
 * The functions that it returns can be used, for example,
 * ===> on a click events or inside react effects <===
 */
export const useNavigation = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate(Urls.getHomeURL());

  const goToLogin = () => navigate(Urls.getLoginURL());

  const goToRegistration = () => navigate(Urls.getRegistrationURL());

  const goToBoards = () => navigate(Urls.getBoardsURL());

  const goToFullBoard = boardId => navigate(Urls.getFullBoardURL(boardId));

  return {
    goToHome,
    goToLogin,
    goToRegistration,
    goToBoards,
    goToFullBoard,
  };
};
