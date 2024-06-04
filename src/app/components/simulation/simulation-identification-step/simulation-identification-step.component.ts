import { ClientsSharedService } from './../../../services/shared/clients-shared.service';
import { Component, EventEmitter, Input,OnInit,Output } from '@angular/core'
import { ClientDto } from '../../../services/generated/referentiel-api/models/client-dto';
@Component({
  selector: 'app-simulation-identification-step',
  templateUrl: './simulation-identification-step.component.html',
  styleUrl: './simulation-identification-step.component.scss',
})
export class SimulationIdentificationStepComponent implements OnInit {
  @Output() currentTab= new EventEmitter<number>();
  @Output() selectedClientEmitted=new EventEmitter<ClientDto>();
  @Output() confirmationMessage=new EventEmitter<string>();
  @Input()  selectedClientRecieved ? : ClientDto;
  selectedClients?:Array<ClientDto>
  afterSearch:boolean=false;
  @Input() openTab?:number;

  constructor(private clientsSharedService:ClientsSharedService){

  }
  ngOnInit(): void {
   if(!this.openTab){
   this.openTab=1;
   console.log(this.clientsSharedService.getClients());
  }
  }

  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }
  getClients(){

  }

  uniqueClientSelected($event: ClientDto) {

    this.afterSearch=true;
    console.log($event);
    this.selectedClientEmitted.emit($event);
    this.currentTab.emit(this.openTab);

  }
  clientsSelected($event:Array<ClientDto>){
    this.selectedClients=$event;
    this.clientsSharedService.setClients(this.selectedClients);
    console.log(this.clientsSharedService.getClients())
    this.afterSearch=true;
  }
  recieveMessage($event:string){
      this.confirmationMessage.emit($event);
  }



}
