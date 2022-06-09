import { Request,Response } from "express";

export interface ICartController{
    viewCart(req:Request,res:Response):Promise<Response>;
    addItem(req:Request,res:Response):Promise<Response>;
}