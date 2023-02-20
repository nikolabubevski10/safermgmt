import {
  createHttpLink,
  ApolloClient,
  InMemoryCache,
  // split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import { getMainDefinition } from '@apollo/client/utilities';
// import { WebSocketLink } from '@apollo/client/link/ws';
import { auth } from '../data/firebase';

import { HOST, PROTOCOL } from './stage';

const authLink = setContext(async (_, { headers }) => {
  if (headers?.Authorization) {
    return { headers };
  }

  const { currentUser } = auth;
  let token: string | null = null;

  if (currentUser) {
    token = await currentUser.getIdToken();
  }

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  };
});

const httpUri = `${PROTOCOL}://${HOST}/dev/graphql`;
const httpLink = createHttpLink({
  uri: httpUri,
  fetchOptions: {
    mode: 'cors',
  },
});

// const httpLink = new HttpLink({
//   uri: 'http://localhost:9000/graphql',
// });

// const wsUri = `ws://localhost:9000/graphql`;
// const wsLink = new WebSocketLink({
//   uri: wsUri,
//   options: {
//     reconnect: true,
//   },
// });

// const link = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink,
// );

const client = new ApolloClient({
  // link,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
