import { UserRepository } from "../UserRepository";
import { IUser } from "./IUser";
export interface IUserService{
    userRepository:UserRepository;
    save(user:IUser):Promise<Object>;
    login(body:IUser):Promise<Object>;
}