import { Router } from "express";
import URL from "../models/url.js";

const staticrouter = Router();

staticrouter.get("/", async (req, res) => {
  if(!req.user){
    return res.redirect("/views/login")
  }
  const allUrls = await URL.find({ createdBy: req.user._id});
  res.render("home", { urls: allUrls });
});

staticrouter.get("/signup", (req, res) => {
  res.render("signup");
});

staticrouter.get("/login", (req, res) => {
  res.render("login")
})

export default staticrouter;
