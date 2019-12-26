import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  
  /*todoListe = [  
    'Machine à laver',
    'Frigo',
    'Ordinateur'
  ];*/
  
  todoListe: string[]=[];


  getListe(): string[] {
    var liste: string[];
    liste.push("t1");
    liste.push("t2");
    liste.push("t3");
    return this.todoListe;
  }

  constructor() {
    this.todoListe.push("t1");
    this.todoListe.push("t2");
    this.todoListe.push("t3");
   }

  ajoutTodo(todo: string) {
    this.todoListe.push(todo);
  }

}
