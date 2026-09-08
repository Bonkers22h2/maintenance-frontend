import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-facility-detail-page',
  styleUrl: './facility-detail-page.css',
  templateUrl: './facility-detail-page.html',
})
export class FacilityDetailPage {
  private route = inject(ActivatedRoute)
   facilityId = this.route.snapshot.paramMap.get('id');
}
