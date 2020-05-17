import React from "react";
import Routes from "./routes";
import "./config/StatusBarConfig";
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://192.168.1.42:4000/api' }),
  onError: ({ networkError, graphQLErrors }) => {
    console.log('GraphQl error: ', graphQLErrors)
    console.log('network error: ', networkError)
  },
  cache: new InMemoryCache()
});


const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
)
console.disableYellowBox = true;
export default App;