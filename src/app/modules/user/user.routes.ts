import { validateRequest } from "./../../middleware/validateRequest.js";
import { Router } from "express";
import { UserController } from "./user.controller.js";
import {
  orderValidationSchema,
  userCreationValidationSchema,
  userUpationValidationSchema,
} from "./user.validation.js";

const router = Router();

router
  .route("/users")
  .post(
    validateRequest(userCreationValidationSchema),
    UserController.createUser,
  );
router.route("/users").get(UserController.getAllUsers);

router.route("/users/:userId").get(UserController.getAUserInfo);

router
  .route("/users/:userId")
  .put(
    validateRequest(userUpationValidationSchema),
    UserController.updatUserInfo,
  )
  .delete(UserController.deleteAUser);

router
  .route("/users/:userId/orders")
  .put(validateRequest(orderValidationSchema), UserController.createOrder);

export default router;
