import { TestBed } from '@angular/core/testing';

import { Services3DService } from './services3-d.service';

describe('Services3DService', () => {
  let service: Services3DService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Services3DService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
