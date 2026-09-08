import { Service } from '@angular/core';

@Service()
export class MaintenanceRequest {
  private requests = [
    { title: 'AC not cooling', status: 'SUBMITTED', priority: 'HIGH' },
    { title: 'Leaking faucet', status: 'ASSIGNED', priority: 'LOW' },
    { title: 'Flickering light', status: 'IN_PROGRESS', priority: 'MEDIUM' }
  ];

  getRequests() {
    return this.requests;
  }
}