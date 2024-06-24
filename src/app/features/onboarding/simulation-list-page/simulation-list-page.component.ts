import { Component } from '@angular/core'
import projectAttributes from '../../../data/attributes'
@Component({
  selector: 'app-simulation-list-page',
  templateUrl: './simulation-list-page.component.html',
  styleUrl: './simulation-list-page.component.scss',
})
export class SimulationListPageComponent {
  openConvention: boolean = false
  openFrais: boolean = false
  openAssurance: boolean = false
  attributes=projectAttributes;
  project = [
    { id: '1', name: "BAM" },
    { id: '2', name: "CEMAC" }
  ];

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
