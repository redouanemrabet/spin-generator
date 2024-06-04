import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { CategorieCompteDto, ClientDto } from '../../../../services/generated/referentiel-api/models'
import { TypePieceIdentiteDto } from '../../../../services/generated/referentiel-api/models'
import { ClientService, CompteService } from '../../../../services/generated/referentiel-api/services'
import { SearchCompteClientRequest } from '../../../../services/generated/referentiel-api/models'
import { SearchClientResponse } from '../../../../services/generated/referentiel-api/models';
import { clients } from '../../../../listes/clients'
@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrl: './client-search.component.scss',
})
export class ClientSearchComponent implements OnInit {
   clientSearchForm: any;
   lstClient:any=[];
   searching: boolean = false;
   isCollapsed = false;




     //block of test:
  clients:any=clients;
  @Output() selectedClients = new EventEmitter<any>();
  sendClient(){

  }
  //end of the block test
  //normalement ces deux array doit etre charger depuis le dictionnaire!!!!
  typePI :TypePieceIdentiteDto[]= [
    {id:"1",libelle:"CIN"},
    {id:"1",libelle:"Passport"}
]


categoriesCompte: Array<CategorieCompteDto> = [
  {id: 0, libelle: "Compte chèque"},
  {id: 1, libelle: "Compte CEN"},
  {id: 2, libelle: "Compte d'épargne scolaire"},
  {id: 3, libelle: "Compte interne"},
  {id: 4, libelle: "Compte d'épargne logement"}
];


 @Output() afterSearch=new EventEmitter<boolean>()


  constructor(private formBuilder:FormBuilder,private clientService:ClientService) {}
  ngOnInit() {
    this.clientSearchForm = this.formBuilder.group({
        idClient: ['',[Validators.required]],
        idCompte: ['',[Validators.required]],
        numeroPieceIdentite: ['',[Validators.required]],
        typePieceIdentite: [null,[Validators.required]],
        typeCompte: [null,[Validators.required]]
    });
  }





  rechercherClient(){

    this.searching = true;

    const searchCompteCleintRequest: SearchCompteClientRequest =this.clientSearchForm.value;

    this.clientService.searchClient(searchCompteCleintRequest ).subscribe(
      (res:SearchClientResponse) => {
        this.searching=false;
        this.lstClient=res.lstClient;
        //normalement on doit emit :lstClients
        this.selectedClients.emit(this.clients);
        console.log(this.clientSearchForm)
        console.log(res);
      },
      (err) => {
        this.searching=false;
        this.selectedClients.emit(this.clients);
        console.log(this.clientSearchForm)
       console.log("there is an error during this fetching data!!!!")
       console.log(err)
      },
    )

  }
  resetForm() {
    this.clientSearchForm.reset(); // This resets the form
  }


}
