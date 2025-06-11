import { Router } from "express";
import { loginUser, registerUser } from "../controllers";
import { handleValidationError, validateLogin, validateRegister } from "../middlewares";

const authRoutes = Router();

authRoutes.post("/register", validateRegister, handleValidationError, registerUser);

authRoutes.post("/login", validateLogin, handleValidationError, loginUser);

export { authRoutes };
