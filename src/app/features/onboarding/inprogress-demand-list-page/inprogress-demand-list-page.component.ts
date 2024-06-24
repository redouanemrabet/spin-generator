import { Component } from '@angular/core'
import { projectComptes } from '../../../data/attributes'
import { projectDomaines} from '../../../data/attributes'
@Component({
  selector: 'app-inprogress-demand-list-page',
  templateUrl: './inprogress-demand-list-page.component.html',
  styleUrl: './inprogress-demand-list-page.component.scss',
})
export class InprogressDemandListPageComponent {
  openConvention: boolean = false
  openFrais: boolean = false
  openAssurance: boolean = false

  comptes=projectComptes;
  domaines=projectDomaines;
  
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
