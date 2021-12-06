import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const tasksRoutes: Routes = [
  { path: 'create', pathMatch: 'full', component: TaskCreateComponent },
  { path: 'view/:id', pathMatch: 'full', component: TaskDetailComponent },
  { path: '', pathMatch: 'full', component: TaskListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(tasksRoutes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
