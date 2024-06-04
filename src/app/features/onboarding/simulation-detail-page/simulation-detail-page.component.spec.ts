import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SimulationDetailPageComponent } from './simulation-detail-page.component'

describe('SimulationDetailPageComponent', () => {
  let component: SimulationDetailPageComponent
  let fixture: ComponentFixture<SimulationDetailPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulationDetailPageComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SimulationDetailPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
