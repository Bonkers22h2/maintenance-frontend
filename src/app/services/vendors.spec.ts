import { TestBed } from '@angular/core/testing';
import { Vendors } from './vendors';

describe('Vendors', () => {
  let service: Vendors;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Vendors);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
