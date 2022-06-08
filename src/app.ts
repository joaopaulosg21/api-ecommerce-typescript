import  express  from "express";
import { cartRouter } from "./Routes/cartRoutes";
import { productRouter } from "./Routes/productRoutes";
import { userRouter } from "./Routes/userRoutes";
const app = express();

app.use(express.json());
app.use("/users",userRouter);
app.use("/products",productRouter);
app.use("/cart",cartRouter);
export { app };
