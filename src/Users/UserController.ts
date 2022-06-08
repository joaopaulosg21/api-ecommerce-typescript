import { Request,Response } from "express";
import { IUser } from "./types/IUser";
import { IUserController } from "./types/IUserController";
import { UserService } from "./UserService";
const userService = new UserService();
export class UserController implements IUserController{

    public async newUser(req: Request, res: Response): Promise<Response> {
        const user:IUser = req.body;
        const response:any = await userService.save(user);
        return res.status(response.status).json({msg:response.msg});
    }

    public async login(req: Request, res: Response): Promise<Response> {
        const user:IUser = req.body;
        const response:any = await userService.login(user);
        return res.status(response.status).json({msg:response.msg});
    }
}