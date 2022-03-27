import express from "express";
import userRoutes from "./user.js";
const routes = express.Router();
routes.use("/",userRoutes);
export default routes