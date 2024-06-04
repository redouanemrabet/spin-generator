import { Component, Input } from '@angular/core'
import { ClientDto } from '../../../../services/generated/referentiel-api/models'

@Component({
  selector: 'app-simulation-form',
  templateUrl: './simulation-form.component.html',
  styleUrl: './simulation-form.component.scss',
})
export class SimulationFormComponent {
@Input() selectedClient?:ClientDto;


}
