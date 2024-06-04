import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SimulationIdentificationStepComponent } from './simulation-identification-step.component'

describe('SimulationIdentificationStepComponent', () => {
  let component: SimulationIdentificationStepComponent
  let fixture: ComponentFixture<SimulationIdentificationStepComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulationIdentificationStepComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SimulationIdentificationStepComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
