import { PrismaClient,cart, products } from "@prisma/client";
import { ICart } from "./types/ICart";
import { ICartRepository } from "./types/ICartRepository";

export class CartRepository implements ICartRepository{
    public model:PrismaClient;
    constructor(){
        this.model = new PrismaClient();
    }

    public async viewCartByUserId(userId: number): Promise<cart | null> {
        return this.model.cart.findFirst({where:{userId:userId}});
    }

    public async createCart(cart: ICart): Promise<cart> {
        return this.model.cart.create({
            data:{
                items:cart.items,
                userId:cart.userId,
            }
        });
    }

    public addItem(product:Array<products>,userId:number): Promise<cart> {
        return this.model.cart.update({
            where:{userId:userId},
            data:{
                items:product
            }
        });
    }

    public deleteCart(cart:cart): Promise<cart | null> {
        return this.model.cart.delete({where:{id:cart.id}});
    }
}