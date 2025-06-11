import app from "../app";
import { Router } from "express";
import { createPost } from "../controllers";

const postingRouter = Router();

postingRouter.post("/posting", createPost);

export { postingRouter };
