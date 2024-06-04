import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OnboardingRoutingModule } from './onboarding-routing.module'
import { SimulationListPageComponent } from './simulation-list-page/simulation-list-page.component'
import { SimulationCreatePageComponent } from './simulation-create-page/simulation-create-page.component'
import { InprogressDemandListPageComponent } from './inprogress-demand-list-page/inprogress-demand-list-page.component'
import { SimulationDetailPageComponent } from './simulation-detail-page/simulation-detail-page.component'
import { OnboardingMainComponent } from './onboarding-main/onboarding-main.component'
import { InprogressDemandDetailPageComponent } from './inprogress-demand-detail-page/inprogress-demand-detail-page.component'
import { AssuranceListComponent } from '../../components/simulation/simulation-credit-step/assurance-list/assurance-list.component'
import { AssuranceModalFormComponent } from '../../components/simulation/simulation-credit-step/assurance-modal-form/assurance-modal-form.component'
import { ConventionFormComponent } from '../../components/simulation/simulation-credit-step/convention-form/convention-form.component'
import { FeesListComponent } from '../../components/simulation/simulation-credit-step/fees-list/fees-list.component'
import { SimulationFormComponent } from '../../components/simulation/simulation-credit-step/simulation-form/simulation-form.component'
import { SimulationResultComponent } from '../../components/simulation/commun/simulation-result/simulation-result.component'
import { TarificationListComponent } from '../../components/simulation/simulation-credit-step/tarification-list/tarification-list.component'
import { ClientSearchComponent } from '../../components/simulation/simulation-identification-step/client-search/client-search.component'
import { PropspectCreateComponent } from '../../components/simulation/simulation-identification-step/propspect-create/propspect-create.component'
import { SimulationIdentificationStepComponent } from '../../components/simulation/simulation-identification-step/simulation-identification-step.component'
import { SimulationRecapStepComponent } from '../../components/simulation/simulation-recap-step/simulation-recap-step.component'
import { SimulationCreditStepComponent } from '../../components/simulation/simulation-credit-step/simulation-credit-step.component'
import { DocumentListComponent } from '../../components/simulation/simulation-recap-step/document-list/document-list.component'
import { SharedModule } from '../../shared/shared.module'
import { SimulationSearchFormComponent } from '../../components/simulation/simulation-credit-step/simulation-search-form/simulation-search-form.component'
import { ClientSearchResultComponent } from '../../components/simulation/simulation-identification-step/client-search-result/client-search-result.component'
import { FraisListComponent } from '../../components/simulation/simulation-credit-step/frais-list/frais-list.component'
import { SimulationSearchResultComponent } from '../../components/simulation/simulation-credit-step/simulation-search-result/simulation-search-result.component'
import { InstructionClientApi } from '../../services/generated/instruction-api/instruction-client-api'
import { ReferentielClientApiModule } from '../../services/generated/referentiel-api/referentiel-client-api.module'
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    // Entrypoint
    OnboardingMainComponent,
    // Pages
    SimulationListPageComponent,
    SimulationCreatePageComponent,
    InprogressDemandListPageComponent,
    SimulationDetailPageComponent,
    InprogressDemandDetailPageComponent,
    // Used components
    SimulationSearchResultComponent,
    SimulationSearchFormComponent,
    FraisListComponent,
    AssuranceListComponent,
    AssuranceModalFormComponent,
    ConventionFormComponent,
    FeesListComponent,
    SimulationFormComponent,
    SimulationResultComponent,
    TarificationListComponent,
    ClientSearchComponent,
    ClientSearchResultComponent,
    PropspectCreateComponent,
    SimulationIdentificationStepComponent,
    SimulationRecapStepComponent,
    SimulationCreditStepComponent,
    DocumentListComponent,
  ],
  imports: [CommonModule,ReactiveFormsModule, OnboardingRoutingModule, NgSelectModule,SharedModule, InstructionClientApi, ReferentielClientApiModule],
})
export class OnboardingModule {}
