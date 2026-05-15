import status from "http-status";
import AppError from "../../errors/AppError.js";
import { TOrder, TUser } from "./user.interface.js";
import User from "./user.model.js";

const createUserIntoDB = async (payload: TUser) => {
  const user = await User.create(payload);

  if (!user)
    throw new AppError(
      status.INTERNAL_SERVER_ERROR,
      "Error while creating user!!",
    );

  return user;
};

const getallUsersFromDB = async () => {
  const users = await User.find({});

  if (!users)
    throw new AppError(
      status.INTERNAL_SERVER_ERROR,
      "Error while fetching users!!",
    );

  return users;
};

const getAUserInfoFromDB = async (userId: number) => {
  const user = await User.findOne({ userId }).select({ password: 0 });

  if (!user) throw new AppError(status.NOT_FOUND, "User not found!");

  return user;
};

const updateUserInfoIntoDB = async (
  userId: number,
  payload: Partial<TUser>,
) => {
  const user = await User.findOneAndUpdate(
    { userId },
    { $set: payload },
    { new: true },
  );

  if (!user) throw new AppError(status.BAD_REQUEST, "Invalid user id");

  return user;
};

const deleteAUserFromDB = async (userId: number) => {
  const data = await User.findOneAndDelete({ userId });
  if (!data) throw new AppError(status.NOT_FOUND, "Invalid user id");

  return null;
};

const createOrderIntoDB = async (userId: number, payload: TOrder) => {
  const user = await User.findOneAndUpdate(
    { userId },
    { $push: { orders: payload } },
  );

  if (!user) throw new AppError(status.BAD_REQUEST, "Invalid user id");

  return null;
};

const getAllOrdersOfUserFromDB = async (userId: number) => {
  const orders = await User.findOne({ userId }).select({ orders: 1 });

  if (!orders) throw new AppError(status.BAD_REQUEST, "Invalid user id");

  return orders;
};

export const UserService = {
  createUserIntoDB,
  getallUsersFromDB,
  getAUserInfoFromDB,
  updateUserInfoIntoDB,
  deleteAUserFromDB,
  createOrderIntoDB,
  getAllOrdersOfUserFromDB,
};
