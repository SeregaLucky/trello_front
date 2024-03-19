import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const link = createHttpLink({
  uri: process.env.REACT_APP_APOLLO_LOCAL_URI,
  credentials: 'include', // but need add some rules in cors in backend
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
