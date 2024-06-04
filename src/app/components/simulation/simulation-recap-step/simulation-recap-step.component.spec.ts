import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SimulationRecapStepComponent } from './simulation-recap-step.component'

describe('SimulationRecapStepComponent', () => {
  let component: SimulationRecapStepComponent
  let fixture: ComponentFixture<SimulationRecapStepComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulationRecapStepComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SimulationRecapStepComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
