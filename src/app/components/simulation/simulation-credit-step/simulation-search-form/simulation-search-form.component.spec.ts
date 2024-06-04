import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SimulationSearchFormComponent } from './simulation-search-form.component'

describe('SimulationSearchFormComponent', () => {
  let component: SimulationSearchFormComponent
  let fixture: ComponentFixture<SimulationSearchFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulationSearchFormComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SimulationSearchFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
