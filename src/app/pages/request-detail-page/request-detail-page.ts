import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaintenanceRequest } from '../../services/maintenance-request';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-request-detail-page',
  imports: [CommonModule],
  templateUrl: './request-detail-page.html',
  styleUrl: './request-detail-page.css'
})
export class RequestDetailPage {
  private route = inject(ActivatedRoute);
  private service = inject(MaintenanceRequest);
  id = this.route.snapshot.paramMap.get('id')!;
  request$ = this.service.getRequestsById(this.id);
}