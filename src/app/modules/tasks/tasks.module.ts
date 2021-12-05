import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskListComponent } from './components/task-list/task-list.component';

import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [TaskDetailComponent, TaskListComponent],
  imports: [CommonModule, TasksRoutingModule],
})
export class TasksModule {}
