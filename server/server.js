import express from "express";
import mongodbConnect from "./models/";
import Routes from "./routes";
import { config } from "dotenv";

const app = express();

if (process.env.NODE_ENV !== "production") {
  config();
}
mongodbConnect();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/file", Routes.FileRouter);

app.listen(process.env.PORT, err => {
  if (!err) {
    console.log(`Server connected to port:${process.env.PORT}`);
  }
});
