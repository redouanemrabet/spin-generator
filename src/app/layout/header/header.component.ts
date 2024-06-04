import { ActivatedRoute } from '@angular/router'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { AppMenuTree } from '../../shared/utils/app-menu-tree'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() isCollapsed: boolean | undefined
  @Input() activeTab: string | undefined
  @Output() collapse = new EventEmitter<void>()

  allMenus = AppMenuTree
}
