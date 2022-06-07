import { Request,Response } from "express";
export interface IUserService{
    saveUser(req:Request,res:Response):Promise<void>;
    login(req:Request,res:Response):Promise<void>;
}