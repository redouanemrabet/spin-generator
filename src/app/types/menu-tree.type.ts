export interface MenuTreeType {
  menu?: string
  path?: string
  label?: string
  authority?: string
  items?: MenuItemTreeType[]
}

export interface MenuItemTreeType {
  icon?: string
  label: string
  path: string
}
