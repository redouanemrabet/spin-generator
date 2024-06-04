import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'
import { ProfileRoutingModule } from './profile-routing.module'
import { MyProfilComponent } from './my-profil/my-profil.component'

@NgModule({
  declarations: [MyProfilComponent],
  imports: [CommonModule, ProfileRoutingModule, NgxSkeletonLoaderModule],
})
export class ProfileModule {}
