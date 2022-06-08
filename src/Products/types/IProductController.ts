import { Request,Response} from "express"
export interface IProductController{
    newProduct(req:Request,res:Response):Promise<Response>;
}