import { Component } from '@angular/core';

import { Task } from '../../interfaces/task';

@Component({
  selector: 'tw-task-detail',
  templateUrl: './task-detail.component.html',
})
export class TaskDetailComponent {
  task: Task = {
    description: 'Do the wigilabs technical test',
    completed: true,
    lat: 50.22,
    long: 20.2,
  };

  onTaskActivity(wasChecked: boolean): void {
    if (wasChecked) {
      this.task.completed = true;
      return;
    }
    this.task.completed = false;
  }
}
