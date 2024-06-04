import { Component } from '@angular/core'
import { AppMenuTree } from '../utils/app-menu-tree'

@Component({
  selector: 'app-dropdown-mobile-menu',
  templateUrl: './dropdown-mobile-menu.component.html',
  styleUrl: './dropdown-mobile-menu.component.scss',
})
export class DropdownMobileMenuComponent {
  isDropdownOpen = false
  allMenus = AppMenuTree

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen
  }

  selectOption(option: any) {
    this.isDropdownOpen = false
  }
}
