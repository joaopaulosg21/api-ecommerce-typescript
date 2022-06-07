export function validadeUser(obj:object):Promise<string>{
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
