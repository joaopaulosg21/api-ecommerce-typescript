import { Request,Response } from "express";

export interface ICartController{
    viewCart(req:Request,res:Response):Promise<Response>;
}