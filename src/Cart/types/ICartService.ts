import { ProductRepository } from "../../Products/ProductRepository";
import { CartRepository } from "../CartRepository";
import { ICart } from "./ICart";

export interface ICartService{
    cartRepository:CartRepository;
    productRepository:ProductRepository;
    viewCartByUserId(header:string):Promise<object>;
    addItem(header:string,productId:number):Promise<object>;
    deleteCart(header:string):Promise<object>;
}