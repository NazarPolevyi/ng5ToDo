import { Component } from '@angular/core';

import { ToDo } from './to-do';

import {TodoDataService} from './todo-data.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  newToDo:ToDo = new ToDo();
  constructor(private todoDataService:TodoDataService){
    
  }
  toggleTodoComplete(todo:ToDo) {
    this.todoDataService.toggleTodoComplete(todo);
  }
  addTodo(){
    this.todoDataService.addTodo(this.newToDo);
    this.newToDo = new ToDo();
  }
  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }
  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
