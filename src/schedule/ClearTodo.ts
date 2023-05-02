import ModelsTodo from "../models/ModelsTodo";

export const ClearTodo = async (): Promise<void> => {
    return await ModelsTodo.clear();
}