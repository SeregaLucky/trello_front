import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';

import Header from 'components/Header';

import { useRoutesConstants } from 'hooks/useRoutesConstants';

import styles from './App.module.scss';

const App = () => {
  const routes = useRoutesConstants();

  if (process.env.NODE_ENV !== 'production') {
    // Adds messages only in a dev environment
    loadDevMessages();
    loadErrorMessages();
  }

  return (
    <div className={styles.wrapper}>
      <Header />

      {routes}
    </div>
  );
};

export default App;
