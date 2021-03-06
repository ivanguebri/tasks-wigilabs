import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Task } from '../../interfaces/task';

import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'tw-task-detail',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  tasks$!: Observable<Task[]>;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasks$ = this.tasksService.getTasks();
  }

  toggleTaskStatus(task: Task): void {
    const { id, completed: currentStatus } = task;
    this.tasksService.toggleTaskStatus(id, !currentStatus).subscribe(() => {
      console.log('done updating!');
    });
  }

  deleteTask(task: Task): void {
    const { id } = task;
    this.tasksService.deleteTask(id).subscribe(() => {
      console.log('done deleting!');
    });
  }
}
