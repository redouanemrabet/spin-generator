import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InprogressDemandDetailPageComponent } from './inprogress-demand-detail-page.component'

describe('InprogressDemandDetailPageComponent', () => {
  let component: InprogressDemandDetailPageComponent
  let fixture: ComponentFixture<InprogressDemandDetailPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InprogressDemandDetailPageComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(InprogressDemandDetailPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
