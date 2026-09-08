import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacilityDetailPage } from './facility-detail-page';

describe('FacilityDetailPage', () => {
  let component: FacilityDetailPage;
  let fixture: ComponentFixture<FacilityDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityDetailPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FacilityDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
