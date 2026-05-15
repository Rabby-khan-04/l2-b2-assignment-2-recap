import { validateRequest } from "./../../middleware/validateRequest.js";
import { Router } from "express";
import { UserController } from "./user.controller.js";
import { userCreationValidationSchema } from "./user.validation.js";

const router = Router();

router
  .route("/users")
  .post(
    validateRequest(userCreationValidationSchema),
    UserController.createUser,
  );

export default router;
