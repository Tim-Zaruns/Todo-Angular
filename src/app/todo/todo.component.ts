import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `<div>
    <input [(ngModel)]="inputValue" value="" placeholder="Tasks..." type="text" />
    <button (click)="addTasks()">add</button>
    <div *ngFor="let task of allTasks; let i = index" class="task">
      <h5>{{task}}</h5>
      <button (click)="removeTask(i)">x</button>
    </div>
  </div>`,
  styleUrls: ['todo.component.scss']
})
export class TodoComponent implements OnInit {
  public inputValue = ""
  public allTasks: string[] = []

  constructor() { }

  ngOnInit(): void {
  }
  public addTasks() {
    this.allTasks.push(this.inputValue)
    this.inputValue = ""
  }
  public removeTask(index: number) {
      this.allTasks = this.allTasks.filter((_, i) => i !== index);
  }
}
