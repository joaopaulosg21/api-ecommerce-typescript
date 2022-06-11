import { IUser } from "./types/IUser";
import { IUserService } from "./types/IUserService";
import { UserRepository } from "./UserRepository";
import { validateEmail, validateLogin, validateUser } from "../validators/validateUser";
import { secret } from "../config";
import { sign } from "jsonwebtoken";
export class UserService implements IUserService{
    public userRepository: UserRepository;

    constructor(){
        this.userRepository = new UserRepository();
    }

    public async save(user:IUser): Promise<Object> {
        try{
            await validateUser(user);
            const email = await validateEmail(user.email);
            if(email){
                return {status:406,msg:"Email ja cadastrado"};
            }else{
                await this.userRepository.save(user);
                return {status:201,msg:"Usuario criado"};
            }

        }catch(error){
           return {status:500,msg:`${error}`};
        }
    }
    public async login(body:IUser): Promise<Object> {
        try{
            await validateLogin(body);
            const email:string = body.email;
            const password:string = body.password;
            const user = await this.userRepository.returnUser(email,password);
            if(user){
                const token = sign({"id":user.id},secret);
                return {status:200,msg:`token:${token}`}
            }else{
                return {status:401,msg:"Email ou senha invalidos"};
            }
        }catch(error){
            return {status:500,msg:`${error}`};
        }
    }
}