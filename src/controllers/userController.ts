import { RequestHandler } from "express";
import { User } from "../models/user";

export const registerUserPage: RequestHandler = (req, res, next) => {
  res.render("register");
};

export const registerUser: RequestHandler = async (req, res, next) => {
  let newUser: User = req.body;
  let created = await User.create(newUser);
  console.log("User created", created);
  res.redirect("/user/login");
};

export const loginUserPage: RequestHandler = (req, res, next) => {
  res.render("login");
};

export const loginUser: RequestHandler = (req, res, next) => {
  console.log(req.user);
  res.redirect("/bookmarks");
};

export const userPage: RequestHandler = async (req, res, next) => {
  if (req.user) {
    console.log(req.user);
    res.render("bookmark-list", { user: req.user });
  } else {
    res.redirect("/user/login");
  }
};
