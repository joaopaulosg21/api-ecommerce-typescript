import { UserRepository } from "../Users/UserRepository";
export function validateUser(obj:object):Promise<string>{
    const values:Array<boolean> = [];
    const keys = ["name","password","email"];
    for(let key of keys){
        if(obj.hasOwnProperty(key)){
            values.push(true)
        }else{
            values.push(false)
        }
    }
    const response = new Promise<string>((resolve,reject)=>{
        if(values.indexOf(false) == -1){
            resolve("Usuario Ok")
        }else{
            reject("Usuario não possui todos os dados")
        }
    })
    return response
}

export async function validateEmail(email:string):Promise<boolean | null>{
    const userRepository = new UserRepository();
    const user = await userRepository.returnEmail(email);
    if(user){
        return true
    }else{
        return null
    }       
}

export function validateLogin(obj:object):Promise<string>{
    const values:Array<boolean> = [];
    const keys = ["email","password"];
    for(let key of keys){
        if(obj.hasOwnProperty(key)){
            values.push(true)
        }else{
            values.push(false)
        }
    }
    const response = new Promise<string>((resolve,reject)=>{
        if(values.indexOf(false) == -1){
            resolve("Usuario Ok")
        }else{
            reject("Usuario não possui todos os dados")
        }
    })
    return response
}