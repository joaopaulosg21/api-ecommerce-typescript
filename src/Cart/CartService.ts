import { verify } from "jsonwebtoken";
import { secret } from "../config";
import { ProductRepository } from "../Products/ProductRepository";
import { CartRepository } from "./CartRepository";
import { ICart } from "./types/ICart";
import { ICartService } from "./types/ICartService";

export class CartService implements ICartService{
    public cartRepository: CartRepository;
    public productRepository: ProductRepository;
    constructor(){
        this.cartRepository = new CartRepository();
        this.productRepository = new ProductRepository();
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

    public async addItem(header: string, productId: number): Promise<object> {
        try{
            const token = header.split(" ")[1];
            const decoded:any = verify(token,secret);
            const product = await this.productRepository.viewProductById(productId);
            const cart = await this.cartRepository.viewCartByUserId(decoded.id);
            if(product){
                if(cart){
                    const arr:any = cart.items;
                    const result = arr.filter((item:any)=>{
                        if(item.id == product.id){
                            return item
                        }
                    });
                    if(result.length == 1){
                        result[0].quantidade++;
                        const updatedCart = await this.cartRepository.addItem(arr,decoded.id);
                        return {status:200,msg:updatedCart}
                    }else{
                        arr.push(product);
                        const updatedCart = await this.cartRepository.addItem(arr,decoded.id);
                        return {status:200,msg:updatedCart}
                    }
                }else{
                    const cart:ICart = {
                        userId:decoded.id,
                        items:[product]
                    }
                    const newCart = await this.cartRepository.createCart(cart);
                    return {status:200,msg:newCart}
                }
            }else{
                return {status:404,msg:`Produto não existe`}
            }
        }catch(error){
            return {status:500,msg:`${error}`};
        }
    }
}