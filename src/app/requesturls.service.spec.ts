import { TestBed } from '@angular/core/testing';

import { RequesturlsService } from './requesturls.service';

describe('RequesturlsService', () => {
  let service: RequesturlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequesturlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
