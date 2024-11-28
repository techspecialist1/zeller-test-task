import {InMemoryCache, ApolloClient} from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:9002/',
  cache: new InMemoryCache(),
});
