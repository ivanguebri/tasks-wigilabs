import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private tasksService: TasksService
  ) {}

  addTask(): void {
    this.tasksService
      .addTask(this.newTaskForm.value)
      .subscribe((res) => this.goBackToList());
  }

  goBackToList(): void {
    this.router.navigateByUrl('/view-tasks');
  }
}
