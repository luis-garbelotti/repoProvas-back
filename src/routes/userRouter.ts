import { Router } from "express";
import * as userController from "../controllers/userController.js";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import userSchema from "../schemas/userSchema.js";

const userRouter = Router();

userRouter.post('/sign-up', validateSchemaMiddleware(userSchema), userController.signUp)

export default userRouter;