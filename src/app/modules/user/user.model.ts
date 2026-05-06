import { model, Schema } from "mongoose";
import { TAddress, TFullName, TOrder, TUser } from "./user.interface.js";

const fullNameSchema = new Schema<TFullName>({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
});

const addressSchema = new Schema<TAddress>({
  street: { type: String, require: true },
  city: { type: String, require: true },
  country: { type: String, require: true },
});

const orderSchema = new Schema<TOrder>({
  productName: { type: String, require: true },
  price: { type: Number, require: true },
  quantity: { type: Number, require: true },
});

const userSchema = new Schema<TUser>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, require: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: fullNameSchema, required: true },
  age: { type: Number, require: true },
  email: { type: String, require: true, unique: true },
  istActive: { type: Boolean, default: true },
  hobbies: { type: [String], default: [] },
  address: { type: addressSchema, required: true },
  orders: { type: [orderSchema], default: [] },
});

const User = model<TUser>("User", userSchema);

export default User;
