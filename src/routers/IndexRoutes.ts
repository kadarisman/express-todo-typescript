import { Request, Response } from "express";
import BaseRouter from "./BaseRouter";
import TodoRoutes from "./TodoRoutes";

class IndexRouter extends BaseRouter{
    public routes(): void {
        this.router.get("/", (req: Request, res: Response)=>{
            res.send({message: "Welcome Typescript in server backend"});
        });
        this.router.use("/todos", TodoRoutes); 
    }
}

export default new IndexRouter().router;
