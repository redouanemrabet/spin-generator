import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InprogressDemandListPageComponent } from './inprogress-demand-list-page.component'

describe('InprogressDemandListPageComponent', () => {
  let component: InprogressDemandListPageComponent
  let fixture: ComponentFixture<InprogressDemandListPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InprogressDemandListPageComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(InprogressDemandListPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
