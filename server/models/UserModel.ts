import { Schema, model } from "mongoose";

interface UserInterface {
  username: string;
  email: string;
  password: string;
  createdAt: string;
}

const userSchema = new Schema<UserInterface>({
  username: String,
  email: String,
  password: String,
  createdAt: String,
});

const UserModel = model("User", userSchema);
export default UserModel;
