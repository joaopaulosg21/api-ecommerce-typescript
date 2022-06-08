import { Router } from "express";
import { ProductController } from "../Products/types/ProductController";
const product = new ProductController();
const productRouter = Router();

productRouter.post("/new",product.newProduct)

export { productRouter };