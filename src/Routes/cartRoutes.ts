import { Router } from "express";
import { CartController } from "../Cart/CartController";
import { verifyToken } from "../validators/validateLogin";
const cart = new CartController();
const cartRouter = Router();

cartRouter.get("/",verifyToken,cart.viewCart);
cartRouter.post("/addItem/:id",verifyToken,cart.addItem);
cartRouter.delete("/deleteCart/",verifyToken,cart.deleteCart)

export {cartRouter};