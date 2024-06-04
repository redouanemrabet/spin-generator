import { Component, Input } from '@angular/core'
import { ClientDto } from '../../../services/generated/referentiel-api/models'

@Component({
  selector: 'app-simulation-credit-step',
  templateUrl: './simulation-credit-step.component.html',
  styleUrl: './simulation-credit-step.component.scss',
})
export class SimulationCreditStepComponent {
  @Input() selectedClient?:ClientDto;
  openConvention: boolean = false
  openFrais: boolean = false
  openAssurance: boolean = false

  openConventionForm() {
    this.openConvention = !this.openConvention
  }

  openFraisList() {
    this.openFrais = !this.openFrais
  }

  openAssuranceList() {
    this.openAssurance = !this.openAssurance
  }
}
