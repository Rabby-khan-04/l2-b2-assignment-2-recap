import status from "http-status";
import AppError from "../../errors/AppError.js";
import { TUser } from "./user.interface.js";
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
  const user = await User.findOne({ userId });

  if (!user)
    throw new AppError(
      status.INTERNAL_SERVER_ERROR,
      "Error while fetching users!!",
    );

  return user;
};

export const UserService = {
  createUserIntoDB,
  getallUsersFromDB,
  getAUserInfoFromDB,
};
