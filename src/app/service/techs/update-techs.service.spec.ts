import { TestBed } from '@angular/core/testing';

import { UpdateTechsService } from './update-techs.service';

describe('UpdateTechsService', () => {
  let service: UpdateTechsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateTechsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
