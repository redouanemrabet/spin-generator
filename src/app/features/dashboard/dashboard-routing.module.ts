import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component'
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component'

const routes: Routes = [
  {
    path: '',
    component: DashboardMainComponent,
  },
  {
    path: 'stats',
    component: DashboardPageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
