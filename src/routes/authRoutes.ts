import { Router } from "express";
import { handleValidationError, validateLogin, validateRegister } from "../middlewares/validations/authValidator";
import { loginUser, registerUser } from "../controllers/authController";

const authRoutes = Router();

authRoutes.post("/register", validateRegister, handleValidationError, registerUser);

authRoutes.post("/login", validateLogin, handleValidationError, loginUser);

export default authRoutes;
