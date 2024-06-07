import { TestBed } from '@angular/core/testing';

import { JobdataService } from './jobdata.service';

describe('JobdataService', () => {
  let service: JobdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
