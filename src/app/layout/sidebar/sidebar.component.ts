import { Component, Input } from '@angular/core'
import { AppMenuTree } from '../../shared/utils/app-menu-tree'
import { MenuItemTreeType, MenuTreeType } from '../../types/menu-tree.type'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() currentUrl = ''
  @Input() isCollapsed = false
  menuItems: MenuItemTreeType[] = []

  @Input() set currentTab(tab: string) {
    if (tab) {
      const tree = AppMenuTree.find((m) => m.menu === tab)
      this.menuItems = tree ? tree.items : []
    } else {
      this.menuItems = []
    }
  }

  protected readonly allMenus = AppMenuTree
}
