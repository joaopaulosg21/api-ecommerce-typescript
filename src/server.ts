import { app } from "./app";
import { config } from "dotenv";
config({
    path:".env"
});

const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})
