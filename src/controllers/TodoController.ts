import { Request, Response} from "express";
import IController from "./ControllerInterface";
import todo from "../db/models/todo";
const db = require('../db/models');

class TodoController implements IController {
    index =  async (req: Request, res: Response): Promise<Response> => {
        const todos = await db.todo.findAll();
        return res.send({todos});
    }

    create = async (req: Request, res: Response): Promise<Response> => {
        const { task, status } = req.body;
        const todo = await db.todo.create({
            task, status
        });        
        return res.send({message: "Todo created", data: todo});
    }

    show = async(req: Request, res: Response): Promise<Response> =>  {
        const { id } = req.params;
        const todo = await db.todo.findOne({
            where: { id }
        });
        return res.send({todo});
    }

    update = async (req: Request, res: Response): Promise<Response> =>  {
        const { id } = req.params;
        const { task, status } = req.body;
        const todo = await db.todo.update({
            task, status
        },{
            where: {id}
        })
        return res.send({message: "Todo updated", data: {id, task, status}});

    }

    delete = async (req: Request, res: Response): Promise<Response> =>  {
        const { id } = req.params;
        await db.todo.destroy({
            where: {id}
        });
        return res.send({message: "Todo deleted"});
    }    
}

export default new TodoController();