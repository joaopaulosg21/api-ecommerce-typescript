import { Router } from "express";
import { CartController } from "../Cart/CartController";
import { verifyToken } from "../validators/validateLogin";
const cart = new CartController();
const cartRouter = Router();

cartRouter.get("/",verifyToken,cart.viewCart);

export {cartRouter};