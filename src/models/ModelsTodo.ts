import knex from '../config/db'; 

export interface Todo {
  id: number;
  task: string;
  status: string;
  created_at: string;
  updated_at: string;
}

class ModelTodo {
  getAll = async (): Promise<Todo[]> => {
    const todos:Todo[] = await knex.select('*').from('todos');
    return todos;
  }

  create = async (todo: Todo): Promise<Todo> => {
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const [createdTodo]: Todo[] = await knex('todos')
      .insert({
        ...todo,
        created_at: now,
        updated_at: now,
      })
      .returning('*');
    return createdTodo;
  }

  update = async (id: number, updates: Partial<Todo>): Promise<Todo | undefined> => {
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const updateTodo: Todo | undefined = await knex('todos')
      .where({ id })
      .update({
        ...updates,
        updated_at: now,
      });
    return updateTodo;
  }

  read = async (id: number): Promise<Todo | undefined> => {
    const todo: Todo = await knex('todos').where({ id }).select('*').first();
    return todo;
  }

  delete = async (id: number): Promise<void> => {
   return await knex('todos').where({ id }).del();
  }

  clear = async (): Promise<void> => {
    return await knex('todos').whereNotIn("id", [1, 2, 3])
    .del();
  }

}

export default new ModelTodo();
