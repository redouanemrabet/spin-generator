import { Component, Input } from '@angular/core'
import { ClientDto } from '../../../services/generated/referentiel-api/models'

@Component({
  selector: 'app-simulation-credit-step',
  templateUrl: './simulation-credit-step.component.html',
  styleUrl: './simulation-credit-step.component.scss',
})
export class SimulationCreditStepComponent {
  @Input() selectedClient?: ClientDto;
  openConvention: boolean = false
  openFrais: boolean = false
  openAssurance: boolean = false
  project = [
    { id: '1', name: "BAM" },
    { id: '2', name: "CEMAC" }
  ];
  dates=[
    {id:'1', name:"12/01/2024"},
    {id:'2', name:"02/02/2024"},
    {id:'3', name:"03/04/2024"},
    {id:'4', name:"12/07/2024"},
    {id:'5', name:"22/09/2024"},
  ]

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
