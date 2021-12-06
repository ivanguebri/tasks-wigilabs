import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskMapComponent } from './components/task-map/task-map.component';
import { TaskPage } from './components/task-page/task-page.component';

const tasksRoutes: Routes = [
  {
    path: '',
    component: TaskPage,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'view-tasks' },
      { path: 'view-tasks', pathMatch: 'full', component: TaskListComponent },
      { path: 'create', pathMatch: 'full', component: TaskCreateComponent },
      { path: 'view/:id', pathMatch: 'full', component: TaskDetailComponent },
      { path: 'map', pathMatch: 'full', component: TaskMapComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(tasksRoutes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
