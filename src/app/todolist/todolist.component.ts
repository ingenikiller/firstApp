import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  providers:[TodoListService]
})
export class TodolistComponent implements OnInit {

  listName='Ma todo list';
  newTodo: string='';
  todos: string[] = [];
  isAuth = false;
  
  constructor(private serviceTodoList: TodoListService) { 
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  
  ngOnInit() {
    //this.todos = this.serviceTodoList.getListe();
    this.todos = this.serviceTodoList.todoListe;
  }


  createTodo(){
    if(this.newTodo) {
      //this.todos.push(this.newTodo);
      this.serviceTodoList.ajoutTodo(this.newTodo);
      this.newTodo='';
    }
  }

}
