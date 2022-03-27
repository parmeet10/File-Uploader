import express from "express";
import UserController from "../controllers/usercontroller.js";
import AuthorizeMiddleware from '../middleware/authmiddleware.js';
const userRoutes = express.Router()



import multer from "multer";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname )
    }
  })
  
  const upload = multer({ storage: storage })
userRoutes.post("/users/signup", new UserController().signup)
userRoutes.post("/users/file/upload", new AuthorizeMiddleware().authenticate,upload.single("csv_FILE"),new UserController().fileUpload)
userRoutes.get("/users/login", new UserController().login)
export default userRoutes;