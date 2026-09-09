import { Component, signal, inject } from '@angular/core';
import { RequestCard } from '../../components/request-card/request-card';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MaintenanceRequest } from '../../services/maintenance-request';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [RouterLink, RequestCard, CommonModule, FormsModule],
  selector: 'app-request-list-page',
  styleUrl: './request-list-page.css',
  templateUrl: './request-list-page.html',
})
export class RequestListPage {
  private maintenanceRequestService = inject(MaintenanceRequest);
  maintenanceRequests: any[] = [];

  ngOnInit() {
    this.maintenanceRequestService.getRequests().subscribe(data => {
      this.maintenanceRequests = data;
    })
  }
}
