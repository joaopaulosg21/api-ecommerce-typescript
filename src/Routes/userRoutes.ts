import { Router } from "express";
import { UserService } from "../Users/UserService";
const userRouter = Router();
const userService = new UserService();

userRouter.post("/new",userService.saveUser);

export { userRouter };