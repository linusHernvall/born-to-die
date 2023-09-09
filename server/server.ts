import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { MONGODB } from "./config";
import { resolvers } from "./graphql/resolvers/middleware";
import typeDefs from "./graphql/typeDefs";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = 5000;

mongoose
  .connect(MONGODB)
  .then(() => {
    console.log("MongoDB connected");
    return server.listen({ port: port });
  })
  .then((res) => {
    console.log(`Server is running at ${res.url}`);
  });
