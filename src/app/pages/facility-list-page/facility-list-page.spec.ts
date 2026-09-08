import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacilityListPage } from './facility-list-page';

describe('FacilityListPage', () => {
  let component: FacilityListPage;
  let fixture: ComponentFixture<FacilityListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FacilityListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
