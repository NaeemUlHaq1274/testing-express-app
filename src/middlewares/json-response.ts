import { Request, Response, NextFunction } from "express";

export const jsonResponseMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.sendJSON = (data: any, statusCode?: number, sucess?: boolean) => {
    res.setHeader("Content-Type", "application/json");
    res.status(statusCode || 200).send(JSON.stringify({ sucess: sucess || true, data }));
  };
  next();
};
