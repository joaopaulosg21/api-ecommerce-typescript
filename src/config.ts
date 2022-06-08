import { config } from "dotenv";
config({
    path:".env"
});
const port = process.env.PORT;
const teste = process.env.SECRET;
let secret = "";
if(teste){
    secret = teste
}
export {port,secret}