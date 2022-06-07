import  express  from "express";
import { userRouter } from "./Routes/userRoutes";
const app = express();

app.use(express.json());
app.use("/users",userRouter)
export { app };
