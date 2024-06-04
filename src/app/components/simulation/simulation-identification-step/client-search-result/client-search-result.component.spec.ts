import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ClientSearchResultComponent } from './client-search-result.component'

describe('ClientSearchResultComponent', () => {
  let component: ClientSearchResultComponent
  let fixture: ComponentFixture<ClientSearchResultComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientSearchResultComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ClientSearchResultComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
