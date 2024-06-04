import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SimulationSearchResultComponent } from './simulation-search-result.component'

describe('SimulationSearchResultComponent', () => {
  let component: SimulationSearchResultComponent
  let fixture: ComponentFixture<SimulationSearchResultComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulationSearchResultComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SimulationSearchResultComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
