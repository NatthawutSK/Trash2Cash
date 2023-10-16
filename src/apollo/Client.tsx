// Container component
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://omboue.stepzen.net/api/agile-tuatara/__graphql",
  headers: {
    Authorization:
      "apikey omboue::stepzen.io+1000::ded329eeaf9b82faed22b4b7e74c2493310da2e0b5737eafb856d51b97a4498a",
  },
  cache: new InMemoryCache(),
});

export default client;
