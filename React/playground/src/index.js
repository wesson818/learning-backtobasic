import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'http://localhost:5000/graphql?',
//   cache: new InMemoryCache()
// });

// client
//   .query({
//     query: gql`
//     query {
//       books{
//         name
//         author {
//           name
//         }
//       }
//     }
//     `
//   })
//   .then(result => console.log("result",result));

ReactDOM.render(
  <React.StrictMode>
    {/* <ApolloProvider client={client}> */}
      <App />
    {/* </ApolloProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
