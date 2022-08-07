import { Component } from '@angular/core';
import { Todo } from './todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularToDo'; 
  todoArray: Todo[] = [ 
    {task: "mow grass", completed: false},
    {task: "get gas", completed: true},
    {task: "wash dishes", completed: false},
    {task: "fold laundry", completed: true},
    {task: "cook dinner", completed: true}
  ];
  searchedArray: Todo[] = this.todoArray; 

  newTask: Todo = {task: "", completed: false}; 
  searchArrayByString: string = ""; 
  todoArrayIndex: number = -1; 
  

  addTodo() {
    let task = Object.assign({}, this.newTask);
    this.todoArray.push(task);

    this.searchArray(); 
    this.newTask.task = ""; 
  }

  completeTask(index: number) {
    this.getTodoArrayIndex(index);

    this.todoArray[this.todoArrayIndex].completed = true;
  }

  removeTask(index: number) {
    
    this.getTodoArrayIndex(index);
    
    this.todoArray.splice(this.todoArrayIndex, 1);

    this.searchArray();
  }

  searchArray() {
    this.searchedArray = this.todoArray;

    this.searchedArray = this.todoArray.filter((todo) => {
      
      return todo.task.includes(this.searchArrayByString);
    });
  }

  getTodoArrayIndex(index: number) {  
    this.todoArrayIndex = this.todoArray.findIndex((todo) => { 
      return this.searchedArray[index] === todo;
    });
  }
  
  ngOnInit(): void {
  }
}