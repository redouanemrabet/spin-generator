import { TestBed } from '@angular/core/testing'

import { SettingPageService } from './setting-page.service'

describe('SettingPageService', () => {
  let service: SettingPageService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(SettingPageService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
