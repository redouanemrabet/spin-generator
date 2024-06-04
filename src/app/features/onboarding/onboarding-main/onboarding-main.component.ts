import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-onboarding-main',
  templateUrl: './onboarding-main.component.html',
  styleUrl: './onboarding-main.component.scss',
})
export class OnboardingMainComponent {
  constructor(private router: Router) {
    this.router.navigate(['/onboarding/create-simulation'])
  }
}
