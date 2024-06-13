import USER from "../models/user.js";
import { v4 as uuidv4 } from 'uuid';
import { setUser } from "../service/auth.js";

export const handleUserSignup = async (req, res) => {
  const { name, email, password } = req.body;
  await USER.create({
    name,
    email,
    password,
  });

  return res.redirect("/views");
};

export const handleUserLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await USER.findOne({ email, password });
  if(!user) {
    return res.render("login", {error: "Invalid username or password"})
  }

  //sessionIdToUserMap.set(sessionId, user)
  const token = setUser(user)

  return res.cookie("uuid", token).redirect("/views");
};
