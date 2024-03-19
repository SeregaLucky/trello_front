import { generatePath } from 'react-router';

import { PATHS } from 'const/paths';

/**
 * An object containing functions to retrieve page URLs
 * @typedef {Object} Urls
 * @property {function(): string} getHomeURL - Function to get the home page URL
 * @property {function(): string} getBoardsURL - Function to get the URL of the boards page
 * @property {function(string|number): string} getFullBoardURL - Function to get the URL of the board's full information page
 * @property {function(): string} getLoginURL - Function to get the login page URL
 * @property {function(): string} getRegistrationURL - Function to get the registration page URL
 */

/**
 * An object containing functions to retrieve page URLs.
 * ===> Use in "to" in components Link, NavLink and Navigate <===
 * ===> Use in navigate() from useNavigate <===
 * @type {Urls}
 */
export const Urls = {
  getHomeURL() {
    return PATHS.HOME.path;
  },

  /* BOARDS - FULL BOARD */
  getBoardsURL() {
    return PATHS.BOARDS.path;
  },

  /**
   * @param {string|number} boardId - Board ID
   */
  getFullBoardURL(boardId) {
    return generatePath(PATHS.BOARDS.children.FULL_BOARD.path, { boardId });
  },

  /* AUTH */
  getLoginURL() {
    return PATHS.AUTH.url + PATHS.AUTH.children.LOGIN.path;
  },

  getRegistrationURL() {
    return PATHS.AUTH.url + PATHS.AUTH.children.REGISTRATION.path;
  },
};
