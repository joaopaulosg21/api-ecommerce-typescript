import { PrismaClient,cart, products } from "@prisma/client";
import { ICart } from "./ICart";

export interface ICartRepository{
    model:PrismaClient;
    viewCartByUserId(userId:number):Promise<cart | null>;
    createCart(cart:ICart):Promise<cart>;
    addItem(product:Array<products>,userId:number):Promise<cart>;
    deleteCart(cart:cart):Promise<cart | null>;
}