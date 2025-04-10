import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // Get the auth token from local storage
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up the Apollo Client
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
      <ApolloProvider client={client}>
        <Navbar />
        <Outlet />
      </ApolloProvider>
  );
}

export default App;
