import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Task } from '../../interfaces/task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'tw-task-detail',
  templateUrl: './task-detail.component.html',
})
export class TaskDetailComponent implements OnInit {
  task$!: Observable<Task>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const taskId = this.route.snapshot.paramMap.get('id')!;
    this.task$ = this.tasksService.getTask(taskId);
  }

  goBackToList(): void {
    this.router.navigateByUrl('/view-tasks');
  }
}
