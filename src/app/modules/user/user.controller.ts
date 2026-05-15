import { Request, Response } from "express";
import { UserService } from "./user.service";
import status from "http-status";
import { ApiResponse } from "../../utility/ApiResponse.js";
import AppError from "../../errors/AppError.js";

const createUser = async (req: Request, res: Response) => {
  const user = await UserService.createUserIntoDB(req.body);

  return res
    .status(status.CREATED)
    .json(new ApiResponse(true, "User created successfully!", user));
};

const getAllUsers = async (req: Request, res: Response) => {
  const users = await UserService.getallUsersFromDB();

  return res
    .status(status.OK)
    .json(new ApiResponse(true, "User fetched Successfully", users));
};

const getAUserInfo = async (req: Request, res: Response) => {
  const { userId } = req.params;
  if (!userId || Array.isArray(userId))
    throw new AppError(status.BAD_REQUEST, "Invalid userId");
  const user = await UserService.getAUserInfoFromDB(parseFloat(userId));

  return res
    .status(status.OK)
    .json(new ApiResponse(true, "User fetched successfully!", user));
};

export const UserController = { createUser, getAllUsers, getAUserInfo };
