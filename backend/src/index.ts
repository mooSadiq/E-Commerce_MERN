import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import { seedInitialProducts } from "./services/productService";
import productRoute from "./routes/productRoute";
import cartRoute from "./routes/cartRoute";

dotenv.config();
const app = express();
const port = 3001;

app.use(express.json());
mongoose
  .connect(process.env.DATABASE_URL || "")
  .then(() => console.log("Mongo connected!"))
  .catch((err) => console.log("Faild to connect", err));

// seed the products to database
seedInitialProducts();
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);
app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`);
});
