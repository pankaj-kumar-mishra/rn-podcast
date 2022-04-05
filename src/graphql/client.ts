import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'https://frozen-river-77426.herokuapp.com/query',
});

// ".../query" is for fetch
// query Search {
//   search(term: "Full stack radio") {
//     artist
//     feedUrl
//   }
// }

// query Feed {
//   feed(feedUrl: "https://feeds.transistor.fm/full-stack-radio") {
//     title
//   }
// }
