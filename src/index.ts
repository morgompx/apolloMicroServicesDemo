import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server";

const gateway = new ApolloGateway(
  {
    serviceList: [

    ],
  },
);

const apolloServer = new ApolloServer(
  {
    gateway,
    subscriptions: false,
  },
);

apolloServer.listen(4000)
  .then(({ url }) => {
    console.log(`Apollo Server - Gateway listening at ${url}`);
  });
