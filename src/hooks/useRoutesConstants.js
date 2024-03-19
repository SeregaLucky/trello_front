import { useRoutes } from 'react-router';

import { PATHS } from 'const/paths';

import HomePage from 'pages/HomePage';
import BoardsPage from 'pages/BoardsPage';
import FullBoardPage from 'pages/FullBoardPage';
import AuthPage from 'pages/AuthPage';

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
      element: <AuthPage />,
    },
  ]);

  return routes;
};
