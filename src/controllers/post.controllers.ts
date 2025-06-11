import { Request, Response } from "express";

export const createPost = async (req: Request, res: Response) => {
  const data = req.body;

  res.sendJSON({
    message: "Post created successfully",
    data,
  });
};
