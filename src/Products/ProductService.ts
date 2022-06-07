import { Request,Response } from "express";
import { validateProduct } from "../validators/validateProduct";
import { ProductRepository } from "./ProductRepository";
import { IProduct } from "./types/IProduct";
import { IProductService } from "./types/IProductService";
const productRepository = new ProductRepository();

export class ProductService implements IProductService{
    
    public async saveProduct(req: Request, res: Response): Promise<void> {
        const product:IProduct = req.body;
        try{
            await validateProduct(product);
            await productRepository.save(product);
            res.status(201).json({msg:"Produto cadastrado"})
        }catch(error){
            res.status(500).json({msg:`${error}`})
        }
    }
}