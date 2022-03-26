import express from "express";
import UserController from "../controllers/usercontroller.js";
const userRoutes = express.Router()
userRoutes.post("/users/signup", new UserController().signup)
userRoutes.get("/users/signup", new UserController().login)
export default userRoutes