import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SimulationCreditStepComponent } from './simulation-credit-step.component'

describe('SimulationCreditStepComponent', () => {
  let component: SimulationCreditStepComponent
  let fixture: ComponentFixture<SimulationCreditStepComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulationCreditStepComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SimulationCreditStepComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
