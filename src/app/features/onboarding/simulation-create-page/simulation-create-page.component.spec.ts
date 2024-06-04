import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SimulationCreatePageComponent } from './simulation-create-page.component'

describe('SimulationCreatePageComponent', () => {
  let component: SimulationCreatePageComponent
  let fixture: ComponentFixture<SimulationCreatePageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulationCreatePageComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SimulationCreatePageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
