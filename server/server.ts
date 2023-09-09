import { ApolloServer } from "apollo-server-express";

import { resolvers } from "./graphql/resolvers/middleware";
import typeDefs from "./graphql/typeDefs";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// mongoose.connect();
