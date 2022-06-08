import { verify } from "jsonwebtoken";
import { secret } from "../config";
import { CartRepository } from "./CartRepository";
import { ICartService } from "./types/ICartService";

export class CartService implements ICartService{
    public cartRepository: CartRepository;
    constructor(){
        this.cartRepository = new CartRepository();
    }

    public async viewCartByUserId(header:string): Promise<object> {
        try{
            const token = header.split(" ")[1];
            const decoded:any = verify(token,secret);
            const cart = await this.cartRepository.viewCartByUserId(decoded.id);
            if(cart){
                return {status:200,msg:cart};
            }else{
                return {status:404,msg:"Carrinho não existe"};
            }
        }catch(error){
            return {status:500,msg:`${error}`};
        }
    }
}