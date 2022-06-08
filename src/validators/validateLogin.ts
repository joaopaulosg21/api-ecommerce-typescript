import { Response,Request,NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { secret } from "../config";

export function verifyToken(req:Request,res:Response,next:NextFunction){
    if(req.headers["authorization"]){
        try{
            verify(req.headers["authorization"].split(" ")[1],secret);
            next()
        }catch(error){
            return res.status(401).json({msg:"Token invalido"})
        }
    }else{
        return res.status(401).json({msg:"Não possui token de acesso"})
    }
}