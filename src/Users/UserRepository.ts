import { PrismaClient, users } from "@prisma/client";
import { IUser } from "./types/IUser";
import { IUserRepository } from "./types/IUserRepository";

export class UserRepository implements IUserRepository{
    public model:PrismaClient;
    constructor(){
        this.model = new PrismaClient();
    }

    public async save(user: IUser): Promise<IUser> {
        return this.model.users.create({
            data:{
                name:user.name,
                email:user.email,
                password:user.password,
            }
        })
    }
    
    public async returnEmail(email: string): Promise<users|null> {
        return this.model.users.findFirst({where:{email:email}})
    }

    public async returnUser(email: string, password: string): Promise<users | null> {
        return this.model.users.findFirst({where:{email:email,password:password}});
    }
    
}