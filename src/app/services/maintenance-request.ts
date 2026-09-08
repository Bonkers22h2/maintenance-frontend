import { Service } from '@angular/core';

@Service()
export class MaintenanceRequest {
  private requests = [
    { id: 1, title: 'AC not cooling', status: 'SUBMITTED', priority: 'HIGH' },
    { id: 2, title: 'Leaking faucet', status: 'ASSIGNED', priority: 'LOW' },
    { id: 3, title: 'Flickering light', status: 'IN_PROGRESS', priority: 'MEDIUM' }
  ];

  getRequests() {
    return this.requests;
  }
}