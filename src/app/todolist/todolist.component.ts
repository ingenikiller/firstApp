import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  listName='Ma todo list';
  newTodo: string='';
  todos: string[] = [];
  constructor() { }

  createTodo(){
    if(this.newTodo) {
      this.todos.push(this.newTodo)
      this.newTodo='';
    }
  }

  ngOnInit() {
  }

}
