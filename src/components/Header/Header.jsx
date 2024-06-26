import { Link, NavLink } from 'react-router-dom';
import cn from 'classnames';

import InfoUser from './components/InfoUser';

import { Urls } from 'helpers/urls';

import styles from './Header.module.scss';

const links = [
  {
    path: Urls.getHomeURL(),
    label: 'Home',
    onlyPublic: true,
    onlyPrivate: false,
  },
  {
    path: Urls.getBoardsURL(),
    label: 'Boards',
    onlyPublic: false,
    onlyPrivate: true,
  },
  {
    path: Urls.getLoginURL(),
    label: 'Login',
    onlyPublic: true,
    onlyPrivate: false,
  },
  {
    path: Urls.getRegistrationURL(),
    label: 'Registration',
    onlyPublic: true,
    onlyPrivate: false,
  },
];

const Header = () => {
  return (
    <header className={styles.headerTop}>
      <nav>
        <h1>
          <Link to={Urls.getHomeURL()}>T</Link>
        </h1>

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

      <InfoUser />
    </header>
  );
};

export default Header;
