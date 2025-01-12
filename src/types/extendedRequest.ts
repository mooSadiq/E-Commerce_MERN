import { Request, Response } from "express";


export interface ExtendRequest extends Request {
  user?: any;
}
