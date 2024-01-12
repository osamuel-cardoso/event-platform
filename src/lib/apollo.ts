import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clr5vusa4000008jo3zv197ym/master',
  cache: new InMemoryCache(),
})
