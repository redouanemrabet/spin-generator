import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-setting-main',
  templateUrl: './setting-main.component.html',
  styleUrl: './setting-main.component.scss',
})
export class SettingMainComponent {
  constructor(private router: Router) {
    this.router.navigate(['/setting/setting'])
  }
}
