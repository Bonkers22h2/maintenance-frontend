import { Component, signal, inject } from '@angular/core';
import { RequestCard } from './components/request-card/request-card';
import { CommonModule } from '@angular/common';
import { MaintenanceRequest } from './services/maintenance-request';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RequestCard, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('maintenance-frontend');
  private maintenanceRequestService = inject(MaintenanceRequest);
  requests = this.maintenanceRequestService.getRequests();

}
