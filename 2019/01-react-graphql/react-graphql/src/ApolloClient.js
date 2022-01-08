import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';


// Application Level Error Handler
// All errors are first passed through this error handler
const errorLink = onError(({ networkError, graphQLErrors }) => {

  // GraphQL Errors
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      // handle errors differently based on its error code
      switch (err.code) {
        case 403:
          // Your Error handling logic here
          window.alert(
            `Application Error handler invoked \n message: ${err.message} \n code: ${err.code}`
          )
          window.location.href = "/login"
          return null

        case 500:
          // Your Error handling logic here
          window.alert(
            "Server Error \n Application Error handler invoked \n CODE: 500"
          )
          window.location.href = "/error-500"
          return null

        default:
          return
      }
    }
  }

  // NetworkErrors
  if (networkError) console.log(`[Network error]: ${networkError}`);
});


const httpLink = new createHttpLink({ uri: 'http://localhost:8000/graphql' })


const link = ApolloLink.from([
  errorLink,
  httpLink,
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});


export default client
