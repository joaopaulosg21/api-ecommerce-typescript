import { PrismaClient,cart } from "@prisma/client";

export interface ICartRepository{
    model:PrismaClient;
    viewCartByUserId(userId:number):Promise<cart | null>
}