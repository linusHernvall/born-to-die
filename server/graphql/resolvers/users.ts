import UserModel from "../../models/UserModel";

export const userResolvers = {
  Query: {
    async getUsers() {
      const users = await UserModel.find();
      return users.map((user) => ({ ...user.toObject(), id: user._id }));
    },
  },
};
