import { Component } from '@angular/core'
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-dropdown-user',
  templateUrl: './dropdown-user.component.html',
  styleUrl: './dropdown-user.component.scss',
})
export class DropdownUserComponent {
  isDropdownOpen = false

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen
  }
}
