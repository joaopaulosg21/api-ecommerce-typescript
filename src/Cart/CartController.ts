import { Request, Response } from "express";
import { CartService } from "./CartService";
import { ICartController } from "./types/ICartController";
const cartService = new CartService();
export class CartController implements ICartController{

    public async viewCart(req: Request, res: Response): Promise<Response> {
        const header = req.headers["authorization"];
        if(header){
            const response:any = await cartService.viewCartByUserId(header);
            return res.status(response.status).json({msg:response.msg})
        }else{
            return res.status(500).json({msg:"Não possui token"});
        }
    }

    public async addItem(req: Request, res: Response): Promise<Response> {
        const header = req.headers["authorization"];
        const productId = Number(req.params.id);
        if(header){
            const response:any = await cartService.addItem(header,productId);
            return res.status(response.status).json({msg:response.msg})
        }else{
            return res.status(500).json({msg:"Não possui token"});
        }
    }

    public async deleteCart(req: Request, res: Response): Promise<Response> {
        const header = req.headers["authorization"];
        if(header){
            const response:any = await cartService.deleteCart(header);
            return res.status(response.status).json({msg:response.msg});
        }else{
            return res.status(500).json({msg:"Não possui token"});
        }
    }
}