import { Router } from "express";
import {handleUserSignup, handleUserLogin} from "../constrollers/user.js";

const userrouter = Router();

userrouter.post("/signup", handleUserSignup);

userrouter.post("/login", handleUserLogin);

export default userrouter;
