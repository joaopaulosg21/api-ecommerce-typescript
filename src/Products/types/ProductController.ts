import { Request, Response } from "express";
import { ProductService } from "../ProductService";
import { IProduct } from "./IProduct";
import { IProductController } from "./IProductController";
const productService = new ProductService();

export class ProductController implements IProductController{

    public async newProduct(req: Request, res: Response): Promise<Response> {
        const product:IProduct = req.body;
        const response:any = await productService.save(product);
        return res.status(response.status).json({msg:response.msg});
    }
}