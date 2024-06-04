import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatTooltipModule } from '@angular/material/tooltip'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'

@NgModule({
  declarations: [],
  imports: [CommonModule, MatTooltipModule, NgxSkeletonLoaderModule],
  exports: [NgxSkeletonLoaderModule, MatTooltipModule],
})
export class SharedModule {}
