import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const validateRegister = [body("username").notEmpty().withMessage("Username is required").isLength({ min: 3 }).withMessage("Username must be at least 3 characters long"), body("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email format").normalizeEmail(), body("password").notEmpty().withMessage("Password is required").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")];

export const validateLogin = [body("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email format").normalizeEmail(), body("password").notEmpty().withMessage("Password is required").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")];

export const handleValidationError = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ error: errors.array() });
    return;
  }
  next();
};
