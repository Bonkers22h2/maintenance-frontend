import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateVendorForm } from './create-vendor-form';

describe('CreateVendorForm', () => {
  let component: CreateVendorForm;
  let fixture: ComponentFixture<CreateVendorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateVendorForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateVendorForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
