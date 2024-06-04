import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { TaskListPageComponent } from './task-list-page/task-list-page.component'
import { TaskMainComponent } from './task-main/task-main.component'

const routes: Routes = [
  {
    path: '',
    component: TaskMainComponent,
  },
  {
    path: 'list',
    component: TaskListPageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
