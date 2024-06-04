import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SettingMainComponent } from './setting-main/setting-main.component'
import { SettingPageComponent } from './setting-page/setting-page.component'

const routes: Routes = [
  {
    path: '',
    component: SettingMainComponent,
  },
  {
    path: 'setting',
    component: SettingPageComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule {}
