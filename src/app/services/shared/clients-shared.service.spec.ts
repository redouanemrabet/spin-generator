import { TestBed } from '@angular/core/testing';

import { ClientsSharedService } from './clients-shared.service';

describe('ClientsSharedService', () => {
  let service: ClientsSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
