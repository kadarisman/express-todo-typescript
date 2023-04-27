import BaseRouter from "./BaseRouter";
import TodoController from "../controllers/TodoController";
import { auth } from '../middlewares/AuthMiddleware';

class TodoRoutes extends BaseRouter {
    public routes(): void {
        this.router.get("/", TodoController.index);
        this.router.post("/", auth, TodoController.create);
        this.router.get("/:id", auth, TodoController.show);
        this.router.put("/:id", auth, TodoController.update);
        this.router.delete("/:id", auth, TodoController.delete);
    }
}

export default new TodoRoutes().router;