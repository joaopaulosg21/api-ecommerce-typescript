import { Prisma } from "@prisma/client";

export interface ICart{
    id?:number;
    userId:number;
    items:Prisma.JsonValue;
}