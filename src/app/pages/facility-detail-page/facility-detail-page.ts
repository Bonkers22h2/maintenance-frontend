import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Facility } from '../../services/facility';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-facility-detail-page',
  styleUrl: './facility-detail-page.css',
  templateUrl: './facility-detail-page.html',
})
export class FacilityDetailPage {
  private route = inject(ActivatedRoute);
  private service = inject(Facility);
  id = this.route.snapshot.paramMap.get('id')!;
  facility$ = this.service.getFacilityById(this.id);
}
