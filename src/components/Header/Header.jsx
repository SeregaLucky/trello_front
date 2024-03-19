import { Link, NavLink } from 'react-router-dom';
import cn from 'classnames';

import { Urls } from 'helpers/urls';

import styles from './Header.module.scss';

const links = [
  {
    path: Urls.getHomeURL(),
    label: 'Home',
  },
  {
    path: Urls.getBoardsURL(),
    label: 'Boards',
  },
  {
    path: Urls.getLoginURL(),
    label: 'Login',
  },
  {
    path: Urls.getRegistrationURL(),
    label: 'Registration',
  },
];

const Header = () => {
  return (
    <header className={styles.headerTop}>
      <h1>
        <Link to={Urls.getHomeURL()}>T</Link>
      </h1>

      <nav>
        <ul className={styles.list}>
          {links.map(({ path, label }) => (
            <li className={styles.navigationItem} key={path}>
              <NavLink
                className={({ isActive }) =>
                  cn(styles.link, { [styles.active]: isActive })
                }
                to={path}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
