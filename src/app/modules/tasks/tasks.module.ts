import { NgModule } from '@angular/core';

import { TaskDetailComponent } from './components/task-detail/task-detail.component';

@NgModule({
  declarations: [TaskDetailComponent],
  exports: [TaskDetailComponent],
})
export class TasksModule {}
