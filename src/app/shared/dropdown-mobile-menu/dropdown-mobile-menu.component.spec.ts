import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DropdownMobileMenuComponent } from './dropdown-mobile-menu.component'

describe('DropdownMobileMenuComponent', () => {
  let component: DropdownMobileMenuComponent
  let fixture: ComponentFixture<DropdownMobileMenuComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownMobileMenuComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(DropdownMobileMenuComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
