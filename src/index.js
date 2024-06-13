import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import path from "path";
// Router paths
import router from "../routes/url.js";
import staticrouter from "../routes/static.js";
import userrouter from "../routes/user.js";
import cookieParser from "cookie-parser";
//middleware
import {restrictToLoggedinUserOnly, checkAuth} from "../middleware/auth.js";



const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))



app.use("/url", restrictToLoggedinUserOnly,  router);
app.use("/views",checkAuth,  staticrouter)
app.use("/auth", userrouter)


app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))


mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to the Database"))
  .catch((err) => console.log(`${err}`));


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});


