import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { productRouter } from "./routes/product";
import { userRouter } from "./routes/user";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/products", productRouter);

mongoose.connect(
  "mongodb+srv://ecommerce:vitap123@shopping.syzx3dh.mongodb.net/shopping"
);

app.listen(3001, () => console.log("Server started"));