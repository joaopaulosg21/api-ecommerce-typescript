import { Request,Response } from "express";
export interface IUserController{
    newUser(req:Request,res:Response):Promise<Response>;
    login(req:Request,res:Response):Promise<Response>;
}