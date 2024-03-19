// import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import App from './components/App';

import { Refs } from 'const/refs';

import { client } from './apollo/client';

import './stylesheet/main.scss';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(Refs.ROOT);

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>

    <ToastContainer />
  </ApolloProvider>,
);
