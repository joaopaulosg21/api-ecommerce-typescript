import { Router } from "express";
import { UserController } from "../Users/UserController";
const userRouter = Router();
const user = new UserController();

userRouter.post("/new",user.newUser);
userRouter.post("/login",user.login)

export { userRouter };