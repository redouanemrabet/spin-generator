import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MyProfilComponent } from './my-profil/my-profil.component'

const routes: Routes = [
  {
    path: 'my-profile',
    component: MyProfilComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
