import { Request, Response } from "express";
import User from "../models/user.model";
import { encrypt, isMatchPassword } from "../utils";
import { sign } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "zlm";

export const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.sendJSON({ messgae: "Email already in use" }, 400, false);
    return;
  }

  const hashedPassword = await encrypt(password);
  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save();

  res.sendJSON(
    {
      message: "User registered successfully",
      user: {
        username,
        email,
      },
    },
    201
  );
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.sendJSON({ massage: "Invalid credentials" }, 400, false);
  }

  const isMatch = await isMatchPassword(password, user.password);

  if (!isMatch) {
    res.sendJSON({ message: "Invalid credentials" }, 400, false);
  }

  // TODO: Implement the JWT

  // get token
  const token = sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1Day" });

  res.sendJSON({
    message: "User logged in successfully",
    token,
    user: {
      email,
    },
  });
};
