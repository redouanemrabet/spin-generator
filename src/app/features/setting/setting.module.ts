import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SettingMainComponent } from './setting-main/setting-main.component'
import { SettingPageComponent } from './setting-page/setting-page.component'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'
import { SettingRoutingModule } from './setting-routing.module'

@NgModule({
  declarations: [SettingMainComponent, SettingPageComponent],
  imports: [CommonModule, NgxSkeletonLoaderModule, SettingRoutingModule],
})
export class SettingModule {}
