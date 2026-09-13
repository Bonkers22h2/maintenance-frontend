import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssignFacilityPage } from './assign-facility-page';

describe('AssignFacilityPage', () => {
  let component: AssignFacilityPage;
  let fixture: ComponentFixture<AssignFacilityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignFacilityPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AssignFacilityPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
