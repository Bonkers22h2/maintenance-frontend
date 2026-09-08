import { Component, signal, inject } from '@angular/core';
import { RequestCard } from '../../components/request-card/request-card';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MaintenanceRequest } from '../../services/maintenance-request';
@Component({
  imports: [RouterLink, RequestCard, CommonModule],
  selector: 'app-request-list-page',
  styleUrl: './request-list-page.css',
  templateUrl: './request-list-page.html',
})
export class RequestListPage {
  protected readonly title = signal('maintenance-frontend');
  private maintenanceRequestService = inject(MaintenanceRequest);
  requests = this.maintenanceRequestService.getRequests();
}
