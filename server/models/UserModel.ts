import { Document, Schema, model } from "mongoose";

export interface UserInterface extends Document {
  _id: string;
  username: string;
  password: string;
  email: string;
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
