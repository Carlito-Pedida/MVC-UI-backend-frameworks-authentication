import { Router } from "express";
import {
  registerUserPage,
  registerUser,
  loginUserPage,
  loginUser
  //bookmarkPage
} from "../controllers/userController";
import authService from "../services/auth";

const router = Router();

// GET /user/register
router.get("/register", registerUserPage);

// POST /user/register
router.post("/register", registerUser);

// GET /user/login
router.get("/login", loginUserPage);

// POST /user/login
router.post(
  "/bookmarks",
  authService.authenticate("local", {
    failureRedirect: "/user/register"
  }),
  loginUser
);

// router.get("/profile", bookmarkPage);

export default router;
