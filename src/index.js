import React from "react";
import Routes from "./routes";
import "./config/StatusBarConfig";
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { AsyncStorage } from "react-native";

// URI PARA LINUX
// const httpLink = new HttpLink({ uri: 'http://192.168.1.42:4000/api' });

//URI PARA MACOS
const httpLink = new HttpLink({ uri: 'http://localhost:4000/api' });

const getToken = async () => {
  let data = await AsyncStorage.multiGet([
    'accessToken'
  ]);
  let tokenInfo = []
  let arrayLength = data.length;
  for (var i = 0; i < arrayLength; i++) {
    tokenInfo[data[i][0]] = data[i][1];
    console.log('TOKEN', data)

  }
  return tokenInfo['accessToken']
}

const authLink = setContext(async (req, { headers }) => {
  const token = await getToken();
  return {
    ...headers,
    headers: {
      authorization: token ? `Bearer ${token}` : null
    },
  };
});

const link = authLink.concat(httpLink);

const cache = new InMemoryCache();


const client = new ApolloClient({
  link: link,
  cache: cache
});


const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
)
console.disableYellowBox = true;
export default App;