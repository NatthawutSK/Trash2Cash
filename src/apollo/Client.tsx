// Container component
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://neumarktamwallersee.stepzen.net/api/terrifying-hamster/__graphql",
  headers: {
    Authorization:
      "apikey neumarktamwallersee::stepzen.io+1000::29ee6b34606a971db47fc2caecae5abee05a7c87af83065707243421eff0ab42",
  },
  cache: new InMemoryCache(),
});

export default client;
