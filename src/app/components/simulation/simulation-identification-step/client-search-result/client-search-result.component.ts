import { Component,Output,EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { ClientDto } from '../../../../services/generated/referentiel-api/models';
@Component({
  selector: 'app-client-search-result',
  templateUrl: './client-search-result.component.html',
  styleUrl: './client-search-result.component.scss',
})
export class ClientSearchResultComponent {
  @Input() afterSearch!:boolean ;
  @Input() clients!:any;

  @Output() uniqueClientSelected = new EventEmitter<ClientDto>();

  onSelect( row:ClientDto) {
    this.uniqueClientSelected.emit(row);
  }

}
