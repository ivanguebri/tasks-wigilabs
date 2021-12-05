import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const tasksRoutes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'view/:id', component: TaskDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(tasksRoutes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
