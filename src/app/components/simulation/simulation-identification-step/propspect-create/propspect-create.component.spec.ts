import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PropspectCreateComponent } from './propspect-create.component'

describe('PropspectCreateComponent', () => {
  let component: PropspectCreateComponent
  let fixture: ComponentFixture<PropspectCreateComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropspectCreateComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(PropspectCreateComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
