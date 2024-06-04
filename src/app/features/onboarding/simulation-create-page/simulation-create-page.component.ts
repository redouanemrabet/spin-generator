import { Component, OnInit,Input } from '@angular/core'
import { NotaryResourceService } from '../../../services/generated/instruction-api/services/notary-resource.service'
import { ApiRequestNotaryDto } from '../../../services/generated/instruction-api/models/api-request-notary-dto'
import { ClientDto } from '../../../services/generated/referentiel-api/models'

@Component({
  selector: 'app-simulation-create-page',
  templateUrl: './simulation-create-page.component.html',
  styleUrl: './simulation-create-page.component.scss',
})
export class SimulationCreatePageComponent implements OnInit {
  currentStep: number = 1
  showToast: boolean = false;
  confirmationMessag?:string;
  showConfirmationMessage?:boolean;
  selectedClient?:ClientDto;
  currentTabIdentification?:number;

  onNextStep() {
    if (this.currentStep != 3) {
      if(this.currentStep==1 && this.selectedClient==undefined){
        this.showToast=true;
        setTimeout(()=>{
          this.showToast=false;
          console.log(this.showToast)
        },3000)

      }else{
        this.currentStep++
      }

    }

  }

  onPreviousStep() {
    if (this.currentStep != 1) {
      this.currentStep--
     
    }
  }
  goToStep(step:number){
   this.currentStep=step;
  }

  data: any

  constructor(private notaryrService: NotaryResourceService) {}

  uniqueClientSelected($event:ClientDto){
    console.log($event);
    this.selectedClient=$event;
  }
  recieveMessage($event:string){
      this.confirmationMessag = $event;
      this.showConfirmationMessage=true
      setTimeout(()=>{
        this.showConfirmationMessage=true

      },4000);
  }
  recieveCurrentTab($event:number){
       this.currentTabIdentification=$event;
  }


  ngOnInit(): void {
    const apiRequestNotaryDto: ApiRequestNotaryDto = {
      body: {},
      canal: 'WEB',
      requestID: 'xxxxxxx',
      timeStamp: Date.now().toString(),
    }
    this.notaryrService.getNotaries({ body: apiRequestNotaryDto }).subscribe(
      (res) => {
        this.data = res.body
        console.log(res)
        console.log(res.body?.entities?.at(1))
      },
      (err) => {
        console.log(err.body.entity.get(1))
      },
    )
  }
}
