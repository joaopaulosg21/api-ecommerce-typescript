import { Router } from "express";
import { ProductService } from "../Products/ProductService";
const product = new ProductService();
const productRouter = Router();

productRouter.post("/new",product.saveProduct)

export { productRouter };