import { DictionaryResourceService } from './../../../../services/generated/instruction-api/services/dictionary-resource.service';
import { DictionaryDto } from './../../../../services/generated/instruction-api/models/dictionary-dto';
import { Component, Output, EventEmitter, Input } from '@angular/core'
import { TypePieceIdentiteDto } from '../../../../services/generated/referentiel-api/models'
import { OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { FormBuilder, Validators } from '@angular/forms';
import { ClientDto } from '../../../../services/generated/referentiel-api/models';
import { DictionaryClassDto } from '../../../../services/generated/instruction-api/models';
@Component({
  selector: 'app-propspect-create',
  templateUrl: './propspect-create.component.html',
  styleUrl: './propspect-create.component.scss',
})
export class PropspectCreateComponent implements OnInit {
  @Output() uniqueClientSelected = new EventEmitter<ClientDto>();
  @Input() selectedClientRecieved?: ClientDto;
  @Output() confirmationMessage = new EventEmitter<string>();
  prospectForm: any;
  DICT_CLASSES = ['TypePI', 'Civilite'];
  dictionaryList?: Array<DictionaryClassDto>;
  genders: Array<DictionaryDto> | null = [];
  civilites?: any;
  typePIs?: any;


  //for a test
  categoriesCompte_ = [
    { id: '0', name: "Compte chèque" },
    { id: '1', name: "Compte CEN" },
    { id: '2', name: "Compte d'épargne scolaire" },
    { id: '3', name: "Compte interne" },
    { id: '4', name: "Compte d'épargne logement" }
  ];
  typePI_ = [
    { id: 'C', name: "CIN" },
    { id: 'P', name: "Passeport" }
  ];
  civilites_ = [
    {
      id: '1',
      name: 'Monsieur'
    },
    {
      id: '2',
      name: "Madame"
    }
  ]


  // end section

  constructor(
    private formBuilder: FormBuilder,

    private dictionaryService: DictionaryResourceService,
  ) {

  }
  ngOnInit(): void {
    this.loadDictionaries();
    console.log(this.selectedClientRecieved);
    this.prospectForm = this.formBuilder.group(
      {
        civilite: [this.selectedClientRecieved?.clientCivilite, [Validators.required]],
        lastname: [this.selectedClientRecieved?.nomRaisonSocial, [Validators.required]],
        firstname: [this.selectedClientRecieved?.prenom, [Validators.required]],
        mphone: [this.selectedClientRecieved?.telephoneGsm, [Validators.required]],
        birthday: [this.selectedClientRecieved?.dateNaissance, [Validators.required]],
        address: [this.selectedClientRecieved?.adresseClient?.intitule1, [Validators.required]],
        numeroPieceIdentite: [this.selectedClientRecieved?.numeroPieceIdentite, [Validators.required]],
        typePieceIdentite: [this.selectedClientRecieved?.typePieceIdentite?.libelle, [Validators.required]],

      }
    )
  }
  loadDictionaries() {
    const dictionaries: any = [];
    this.DICT_CLASSES.forEach(cl => dictionaries.push({ className: cl }));
    this.dictionaryService.listsByClass({
      body: {
        body: dictionaries,
        canal: 'WEB',
        requestID: uuidv4(),
        timeStamp: Date.now().toString(),
      },
    }).subscribe({
      next: (res) => {
        if (res && res.status === '200') {
          this.dictionaryList = res.body?.entities;
          this.initCombobox();
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  initCombobox() {
    if (this.dictionaryList) {
      this.typePIs = this.dictionaryList.find(a => a.className === 'TypePI')?.dictionary;
      this.civilites = this.dictionaryList.find(a => a.className === 'Civilite')?.dictionary;
    } else {
      this.typePIs = this.typePI_;
      this.civilites = this.civilites_;
    }
  }

  ngDictionary(code: string, dictionaryName: string) {
    if (this.dictionaryList) {
      const source = this.dictionaryList
        .find((a) => a.className === dictionaryName)?.dictionary;
      return source?.find((d) => d.code === code)?.name;
    }
    return code;
  }


  saveProspect() {
    if (this.prospectForm.invalid === true) {
      console.log("Forumulaire invalid!!!!");
    }

    const client: ClientDto = {
      id: 0,
      dateNaissance: this.prospectForm.value.birthday,
      nomRaisonSocial: this.prospectForm.value.lastname,
      prenom: this.prospectForm.value.firstname,
      clientCivilite: this.prospectForm.value.civilite,
      adresseClient: { intitule1: this.prospectForm.value.address },
      telephoneGsm: this.prospectForm.value.mphone,
      typePieceIdentite: { id: this.prospectForm.value.typePieceIdentite, libelle: this.ngDictionary(this.prospectForm.value.typePieceIdentite, 'TypePI') },
      numeroPieceIdentite: this.prospectForm.value.numeroPieceIdentite,
    };
    this.confirmationMessage.emit('Nouveau prospect renseigné, vous pouvez accéder à l\'étape de simulation')
    this.uniqueClientSelected.emit(client);
  }








}
