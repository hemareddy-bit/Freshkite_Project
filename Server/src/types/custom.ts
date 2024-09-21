import { Request } from "express";
import { IToken } from "./token"; 

export interface CustomRequest extends Request {
    user?: IToken;
}
