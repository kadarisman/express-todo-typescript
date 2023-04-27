import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const auth = ( req: Request, res: Response, next: NextFunction) :any => {
    if(!req.headers.authorization){
        return res.send({message: "Token not found"});
    } else{
        let scretKey = process.env.JWT_SECRET_KEY || "ksadaskdj";
        const token: string = req.headers.authorization.split(" ")[1];
    
        try {
            const credential: string | object = jwt.verify(token, scretKey);
            if(credential){
                req.app.locals.credential = credential;
              return next();
            }else{
                return res.send({message: "Token is invalid"});
            }
        } catch (error) {
            return res.send(error);        
        }
    }
}
