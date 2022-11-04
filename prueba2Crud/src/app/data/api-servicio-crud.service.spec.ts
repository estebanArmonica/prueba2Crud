import { TestBed } from '@angular/core/testing';

import { ApiServicioCrudService } from './api-servicio-crud.service';

describe('ApiServicioCrudService', () => {
  let service: ApiServicioCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServicioCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
