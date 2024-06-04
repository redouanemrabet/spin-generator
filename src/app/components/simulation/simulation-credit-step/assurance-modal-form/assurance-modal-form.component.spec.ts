import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssuranceModalFormComponent } from './assurance-modal-form.component'

describe('AssuranceModalFormComponent', () => {
  let component: AssuranceModalFormComponent
  let fixture: ComponentFixture<AssuranceModalFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssuranceModalFormComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(AssuranceModalFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
