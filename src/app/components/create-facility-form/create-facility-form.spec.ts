import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateFacilityForm } from './create-facility-form';

describe('CreateFacilityForm', () => {
  let component: CreateFacilityForm;
  let fixture: ComponentFixture<CreateFacilityForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFacilityForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateFacilityForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
