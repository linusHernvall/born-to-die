import { userResolvers } from "./users";

export const resolvers = {
  Query: {
    ...userResolvers.Query,
  },
};
