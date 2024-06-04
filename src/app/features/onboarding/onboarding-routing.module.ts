import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SimulationCreatePageComponent } from './simulation-create-page/simulation-create-page.component'
import { SimulationListPageComponent } from './simulation-list-page/simulation-list-page.component'
import { InprogressDemandListPageComponent } from './inprogress-demand-list-page/inprogress-demand-list-page.component'
import { OnboardingMainComponent } from './onboarding-main/onboarding-main.component'

const routes: Routes = [
  {
    path: '',
    component: OnboardingMainComponent,
  },
  {
    path: 'create-simulation',
    component: SimulationCreatePageComponent,
  },
  {
    path: 'list-simulation',
    component: SimulationListPageComponent,
  },
  {
    path: 'demand-list',
    component: InprogressDemandListPageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingRoutingModule {}
