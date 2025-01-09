import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";

const app = express();
const port = 3001;

app.use(express.json());
mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce")
  .then(() => console.log("Mongo connected!"))
  .catch((err) => console.log("Faild to connect", err));

app.use("/user", userRoute);
app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`);
});
