import { TestBed } from '@angular/core/testing';
import { MaintenanceRequest } from './maintenance-request';

describe('MaintenanceRequest', () => {
  let service: MaintenanceRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaintenanceRequest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
