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

Routes(app);

app.listen(process.env.PORT, err => {
  console.log(err ? err : `Server is running on port:${process.env.PORT}`);
});
