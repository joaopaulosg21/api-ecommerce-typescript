import { PrismaClient, users } from "@prisma/client";
import { IUser } from "./IUser";

export interface IUserRepository{
    model:PrismaClient;
    save(user:IUser):Promise<IUser>;
    returnEmail(email:string):Promise<users|null>;
    returnUser(email:string,password:string):Promise<users|null>;
}