import app from "../app";
import { createPost } from "../controllers/postController";
import { Router } from "express";

const postingRouter = Router();

postingRouter.post("/posting", createPost);

export default postingRouter;
