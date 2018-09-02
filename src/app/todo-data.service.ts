import { Injectable } from '@angular/core';

import {ToDo} from './to-do';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private lastId:number = 0;
  private todos: ToDo[] = [];

  constructor() { }

  addTodo(todo:ToDo): TodoDataService{
    if(!todo.id){
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): ToDo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): ToDo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): ToDo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: ToDo):ToDo{
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
  
}
