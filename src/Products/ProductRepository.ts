import { Prisma, PrismaClient } from "@prisma/client";
import { IProduct } from "./types/IProduct";
import { IProductRepository } from "./types/IProductRepository";

export class ProductRepository implements IProductRepository{
    public model:PrismaClient;
    constructor(){
        this.model = new PrismaClient();
    }

    public async save(product: IProduct): Promise<IProduct> {
        return this.model.products.create({
            data:{
                name:product.name,
                price:product.price
            }
        });
    }
}