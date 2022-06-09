import { PrismaClient, products } from "@prisma/client";
import { IProduct } from "./IProduct";

export interface IProductRepository{
    model:PrismaClient;
    save(product:IProduct):Promise<IProduct>;
    viewProductById(productId:number):Promise<products | null>;
}