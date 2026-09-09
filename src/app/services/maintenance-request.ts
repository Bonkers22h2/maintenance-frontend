import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class MaintenanceRequest {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/maintenance-requests';

  getRequests() {
    return this.http.get<any[]>(this.apiUrl);
  }

  createRequest(dto: any) {
    return this.http.post<any>(this.apiUrl, dto);
  }
}