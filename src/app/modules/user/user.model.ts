import { model, Schema } from "mongoose";
import { TAddress, TFullName, TOrder, TUser } from "./user.interface.js";

const fullNameSchema = new Schema<TFullName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const addressSchema = new Schema<TAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const orderSchema = new Schema<TOrder>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const userSchema = new Schema<TUser>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: fullNameSchema, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  istActive: { type: Boolean, default: true },
  hobbies: { type: [String], default: [] },
  address: { type: addressSchema, required: true },
  orders: { type: [orderSchema], default: [] },
});

const User = model<TUser>("User", userSchema);

export default User;
