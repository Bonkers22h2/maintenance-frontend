import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-detail-page',
  imports: [],
  templateUrl: './request-detail-page.html',
  styleUrl: './request-detail-page.css'
})
export class RequestDetailPage {
  private route = inject(ActivatedRoute);
  requestId = this.route.snapshot.paramMap.get('id');
}