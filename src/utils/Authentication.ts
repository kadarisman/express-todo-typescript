import jwt from "jsonwebtoken";

class Authentication{
    public static generateToken = (): string => {
        let scretKey: string = process.env.JWT_SECRET_KEY || "ksadaskdj";
        let token: string = jwt.sign('kadarisman', scretKey);

        return token;
    }
}

export default Authentication;