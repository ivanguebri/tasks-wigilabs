import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'tw-task-create',
  templateUrl: './task-create.component.html',
})
export class TaskCreateComponent {
  newTaskForm = this.fb.group({
    description: [''],
    completed: [null],
    lat: [null],
    long: [null],
  });

  constructor(private fb: FormBuilder, private tasksService: TasksService) {}

  addTask(): void {
    this.tasksService
      .addTask(this.newTaskForm.value)
      .subscribe((res) => console.log(res));
  }
}
