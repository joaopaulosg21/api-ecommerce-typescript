import { Request,Response} from "express"
export interface IProductService{
    saveProduct(req:Request,res:Response):Promise<Response>;
}