import { Request, Response } from 'express';
import IController from './ControllerInterface';
import ModelTodo, { Todo } from '../models/ModelsTodo';

class TodoController implements IController {

  index = async (req: Request, res: Response): Promise<Response> => {
    try {
        const todos: Todo[] = await ModelTodo.getAll();
        if(todos){
            return res.status(200).send(todos);
        }else{
            return res.status(404).send({message: "Todo not found"});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({error: "Error internal server"});
    }
  }

  create = async (req: Request, res: Response): Promise<Response>  =>{
    try {
      const todo: Todo = req.body;
      const createdTodo: Todo = await ModelTodo.create(todo);
      return res.status(200).send({message: "Todo created", data: {task: todo.task, status: todo.status}});
    } catch (error) {
      console.error(error);
      return res.status(500).send({error: 'Internal server error' });
    }
  }

  show = async (req: Request, res: Response): Promise<Response> =>{
    try {
      const id: number = Number(req.params.id);
      const todo: Todo | undefined = await ModelTodo.read(id);
      if (todo) {
        return res.status(200).send(todo);
      } else {
       return res.status(404).send({ message: `Todo with id ${id} not found`});
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: 'Internal server error' });
    }
  }

  update = async (req: Request, res: Response): Promise<Response> =>{
    try {
      const id: number = Number(req.params.id);
      const todoById: Todo | undefined = await ModelTodo.read(id);
      if(!todoById){
        return res.status(401).send({message: `Todo with id ${id} not found`})
      }else{
          const updates: Partial<Todo> = req.body;
          const updatedTodo: Todo | undefined = await ModelTodo.update(id, updates);
          if (updatedTodo) {
            return res.status(200).send({message: "Todo updated", data: {task: updates.task, status: updates.status}});
          } else {
           return res.status(404).send({ error: 'Not found' });
          }
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: 'Internal server error' });
    }
  }

  delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id: number = Number(req.params.id);
      const todoById: Todo | undefined = await ModelTodo.read(id);
      if(!todoById){
        return res.status(401).send({message: `Todo with id ${id} not found`})
      }else{
          await ModelTodo.delete(id);
          return res.status(200).send({message: `Todo with id ${id} deleted`});
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: 'Internal server error' });
    }
  }
}

export default new TodoController();
