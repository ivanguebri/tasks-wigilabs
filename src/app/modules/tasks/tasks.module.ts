import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskPage } from './components/task-page/task-page.component';

import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [
    TaskCreateComponent,
    TaskDetailComponent,
    TaskListComponent,
    TaskPage,
  ],
  imports: [CommonModule, ReactiveFormsModule, TasksRoutingModule],
})
export class TasksModule {}
