import { UserInputError } from "apollo-server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { SECRET_KEY } from "../../config";
import UserModel, { UserInterface } from "../../models/UserModel";
import { validateRegisterInput } from "../../util/validators";

interface RegisterInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function generateToken(user: UserInterface): string {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      username: user.username,
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
}

export const userResolvers = {
  Query: {
    async getUsers() {
      const users = await UserModel.find();
      return users.map((user) => ({ ...user.toObject(), id: user._id }));
    },
  },
  Mutation: {
    async register(
      _: any,
      { registerInput }: { registerInput: RegisterInput } // context: any, // info: any
    ) {
      let { username, email, password, confirmPassword } = registerInput;

      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword
      );
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const user = await UserModel.findOne({ username });
      if (user) {
        throw new UserInputError("Username is taken", {
          errors: {
            username: "This username is taken",
          },
        });
      }

      password = await bcrypt.hash(password, 12);

      const newUser: UserInterface = new UserModel({
        email,
        username,
        password,
        createdAt: new Date().toISOString(),
      });

      const res = await newUser.save();

      const token = generateToken(res);

      return {
        ...res.toObject(),
        id: res._id,
        token,
      };
    },
  },
};
