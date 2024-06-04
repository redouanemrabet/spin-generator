import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TaskRoutingModule } from './task-routing.module'
import { TaskListPageComponent } from './task-list-page/task-list-page.component'
import { TaskMainComponent } from './task-main/task-main.component'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskListPageComponent, TaskMainComponent,],
  imports: [CommonModule, TaskRoutingModule, NgxSkeletonLoaderModule,ReactiveFormsModule],
})
export class TaskModule { }
