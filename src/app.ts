import  express  from "express";
import { productRouter } from "./Routes/productRoutes";
import { userRouter } from "./Routes/userRoutes";
const app = express();

app.use(express.json());
app.use("/users",userRouter);
app.use("/products",productRouter);
export { app };
