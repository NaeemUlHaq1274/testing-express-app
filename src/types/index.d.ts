import { Response } from "express";

declare module "express-serve-static-core" {
  interface Response {
    sendJSON: (data: any, statusCode?: number, succes?: boolean) => void;
  }
}
