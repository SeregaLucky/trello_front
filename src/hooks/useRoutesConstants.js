import { useRoutes } from 'react-router';

import { PATHS } from 'const/paths';

import HomePage from 'pages/HomePage';
import BoardsPage from 'pages/BoardsPage';
import FullBoardPage from 'pages/FullBoardPage';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';

import RedirectToLogin from 'components/Redirects/RedirectToLogin';

export const useRoutesConstants = () => {
  const routes = useRoutes([
    {
      path: PATHS.HOME.path,
      element: <HomePage />,
    },

    /* BOARDS - FULL BOARD */
    {
      path: PATHS.BOARDS.path,
      element: <BoardsPage />,
    },
    {
      path: PATHS.BOARDS.children.FULL_BOARD.path,
      element: <FullBoardPage />,
    },

    /* AUTH */
    {
      path: PATHS.AUTH.path,
      element: <RedirectToLogin />,
    },
    {
      path: PATHS.AUTH.children.LOGIN.path,
      element: <LoginPage />,
    },
    {
      path: PATHS.AUTH.children.REGISTRATION.path,
      element: <RegistrationPage />,
    },
  ]);

  return routes;
};
