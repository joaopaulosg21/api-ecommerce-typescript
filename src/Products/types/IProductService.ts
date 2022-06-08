import { ProductRepository } from "../ProductRepository";
import { IProduct } from "./IProduct";

export interface IProductService{
    productRepository:ProductRepository
    save(product:IProduct):Promise<object>;
}