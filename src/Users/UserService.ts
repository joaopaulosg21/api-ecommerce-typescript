import { Request,Response } from "express";
import { IUser } from "./types/IUser";
import { IUserService } from "./types/IUserService";
import { UserRepository } from "./UserRepository";
import { validateEmail, validateUser } from "../validators/validateUser";
const userRepository = new UserRepository();
export class UserService implements IUserService{
    public async saveUser(req: Request, res: Response): Promise<void> {
        const user:IUser = req.body;
        try{
            await validateUser(user);
            const email = await validateEmail(user.email);
            if(email){
                res.status(406).json({msg:"Email ja cadastrado"})
            }else{
                await userRepository.save(user);
                res.status(201).json({msg:"Usuario criado"})
            }

        }catch(error){
            res.status(500).json({msg:`${error}`})
        }
    }
}