import { Request,Response } from "express";
import { IUser } from "./types/IUser";
import { IUserService } from "./types/IUserService";
import { UserRepository } from "./UserRepository";
import { validateEmail, validateLogin, validateUser } from "../validators/validateUser";
const userRepository = new UserRepository();
export class UserService implements IUserService{
    public async saveUser(req: Request, res: Response): Promise<void> {
        const user:IUser = req.body;
        try{
            await validateUser(user);
            const email = await validateEmail(user.email);
            if(email){
                res.status(406).json({msg:"Email ja cadastrado"});
            }else{
                await userRepository.save(user);
                res.status(201).json({msg:"Usuario criado"});
            }

        }catch(error){
            res.status(500).json({msg:`${error}`});
        }
    }
    public async login(req: Request, res: Response): Promise<void> {
        try{
            await validateLogin(req.body);
            const email:string = req.body.email;
            const password:string = req.body.password;
            const user = await userRepository.returnUser(email,password);
            if(user){
                res.status(200).json({msg:"Login feito"});
            }else{
                res.status(401).json({msg:"Usuario não cadastrado"});
            }
        }catch(error){
            res.status(500).json({msg:`${error}`});
        }
    }
}