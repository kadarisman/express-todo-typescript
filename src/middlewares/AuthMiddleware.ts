import { Request, Response, NextFunction } from "express";
import Authentication from "../utils/Authentication";

export const auth = (req: Request, res: Response, next: NextFunction): any => {
  const userSecret = req.headers['x-secret-key'] as string;
  if (!userSecret) {
    return res.send({ message: "x-secret-key must be included in the headers" });
  } else {
    let authSecret = process.env.SECRET_KEY as string;

    try {
      const credential: boolean = Authentication.compareSecret(userSecret, authSecret);
      if (credential) {
        return next();
      } else {
        return res.send({ message: "Secret is invalid" });
      }
    } catch (error) {
      return res.send(error);
    }
  }
}

declare module 'http' {
  interface IncomingHttpHeaders {
    [key: string]: string | string[];
  }
}

