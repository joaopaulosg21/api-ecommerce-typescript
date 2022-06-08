import { Request,Response } from "express";
import { validateProduct } from "../validators/validateProduct";
import { ProductRepository } from "./ProductRepository";
import { IProduct } from "./types/IProduct";
import { IProductService } from "./types/IProductService";

export class ProductService implements IProductService{
    public productRepository: ProductRepository;
    constructor(){
        this.productRepository = new ProductRepository();
    }
    public async save(product:IProduct): Promise<object> {
        try{
            await validateProduct(product);
            await this.productRepository.save(product);
            return {status:201,msg:"Produto cadastrado"};
        }catch(error){
            return {status:500,msg:`${error}`};
        }
    }
}