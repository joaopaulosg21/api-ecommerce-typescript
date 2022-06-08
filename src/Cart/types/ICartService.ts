import { CartRepository } from "../CartRepository";
import { ICart } from "./ICart";

export interface ICartService{
    cartRepository:CartRepository;
    viewCartByUserId(header:string):Promise<object>;
}