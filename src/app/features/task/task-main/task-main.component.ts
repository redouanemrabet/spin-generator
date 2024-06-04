import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-task-main',
  templateUrl: './task-main.component.html',
  styleUrl: './task-main.component.scss',
})
export class TaskMainComponent {
  constructor(private router: Router) {
    this.router.navigate(['/task/list'])
  }
}
