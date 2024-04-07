import Header from 'components/Header';

import { useRoutesConstants } from 'hooks/useRoutesConstants';
import { useGetCurrentUser } from 'hooks/useGetCurrentUser';

import { apolloCatchError } from './apolloCatchError';

import styles from './App.module.scss';

const App = () => {
  const routes = useRoutesConstants();

  useGetCurrentUser();

  apolloCatchError();

  return (
    <div className={styles.wrapper}>
      <Header />

      {routes}
    </div>
  );
};

export default App;
