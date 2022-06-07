import { Router } from "express";
import { UserService } from "../Users/UserService";
const userRouter = Router();
const user = new UserService();

userRouter.post("/new",user.saveUser);
userRouter.post("/login",user.login)

export { userRouter };