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

  ngOnInit() {
    this.tasks$ = this.tasksService.getTasks();
    this.tasksService
      .getTask('QldoqpxZCne5bevnzRM9')
      .subscribe((task) => console.log(task));
  }
}
