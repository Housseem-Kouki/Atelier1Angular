import { Component, OnInit } from '@angular/core';
import { todo } from '../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todolist !:todo[]; 
  constructor() { }

  ngOnInit(): void {
    this.todolist=[ 
      {"userId": 1, "id": 1, "title": "delectus aut autem", "completed": false}, 
      {"userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false}, 
      {"userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false}, 
      {"userId": 1, "id": 4, "title": "quo adipisci enim quam ut ab", "completed": true}];
  }

}
