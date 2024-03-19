/**
 * An object containing links to various page routes
 * @typedef {Object} RoutePaths
 * @property {Object} HOME - data for link
 * @property {string} HOME.path - Link to main page
 * @property {Object} BOARDS - Links to board pages
 * @property {string} BOARDS.path - path
 * @property {Object} BOARDS.children - children boards pages
 * @property {Object} BOARDS.children.FULL_BOARD - data for link
 * @property {string} BOARDS.children.FULL_BOARD.path - Link to full-board page
 * @property {Object} AUTH - data for link
 * @property {string} AUTH.path - Link to auth page
 * @property {string} AUTH.url - For default auth url
 * @property {Object} AUTH.children - children auth pages
 * @property {Object} AUTH.children.LOGIN - data for link
 * @property {string} AUTH.children.LOGIN.path - Link to login page
 * @property {Object} AUTH.children.REGISTRATION - data for link
 * @property {string} AUTH.children.REGISTRATION.path - Link to registration page
 */

/**
 * An object with links to page routes
 * @type {RoutePaths}
 */
export const PATHS = {
  HOME: { path: '/' },

  BOARDS: {
    path: '/boards',

    children: {
      FULL_BOARD: { path: '/boards/:boardId' },
    },
  },

  AUTH: {
    path: '/auth*',
    url: '/auth',

    children: {
      LOGIN: { path: '/login' },
      REGISTRATION: { path: '/registration' },
    },
  },
};
