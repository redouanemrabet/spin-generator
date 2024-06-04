import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardRoutingModule } from './dashboard-routing.module'
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component'
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  declarations: [DashboardPageComponent, DashboardMainComponent],
  imports: [CommonModule, SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
