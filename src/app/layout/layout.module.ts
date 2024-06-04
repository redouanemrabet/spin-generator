import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { NgbModule, NgbPopover } from '@ng-bootstrap/ng-bootstrap'
import { MatTooltipModule } from '@angular/material/tooltip'
import { DropdownUserComponent } from '../shared/dropdown-user/dropdown-user.component'
import { DropdownMobileMenuComponent } from '../shared/dropdown-mobile-menu/dropdown-mobile-menu.component'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DropdownMobileMenuComponent,
    DropdownUserComponent,
  ],
  exports: [FooterComponent, HeaderComponent, SidebarComponent],
  imports: [CommonModule, MatTooltipModule, RouterLink, RouterLinkActive, NgbModule],
})
export class LayoutModule {}
