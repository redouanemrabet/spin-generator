import { Component } from '@angular/core'
import { Router } from '@angular/router'
@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.scss',
})
export class DashboardMainComponent {
  constructor(private router: Router) {
    //
    this.router.navigate(['/dashboard/stats'])
  }
}
