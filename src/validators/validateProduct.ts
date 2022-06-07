export function validateProduct(obj:object):Promise<string>{
    const values:Array<boolean> = [];
    const keys = ["name","price"];
    for(let key of keys){
        if(obj.hasOwnProperty(key)){
            values.push(true)
        }else{
            values.push(false)
        }
    }
    const response = new Promise<string>((resolve,reject)=>{
        if(values.indexOf(false) == -1){
            resolve("Produto Ok")
        }else{
            reject("Produto não possui todos os dados")
        }
    })
    return response
}