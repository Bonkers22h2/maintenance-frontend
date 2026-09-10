import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class MaintenanceRequest {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/maintenance-requests';

  getRequests() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getRequestsById(id: string) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createRequest(dto: any) {
    return this.http.post<any>(this.apiUrl, dto);
  }

  updateStatus(id: string, status: string) {
    return this.http.patch<any>(`${this.apiUrl}/${id}/status`, { status });
  }

  getComments(requestId: string) {
    return this.http.get<any[]>(`${this.apiUrl}/${requestId}/comments`);
  }

  addComment(requestId: string, content: string) {
    return this.http.post<any>(`${this.apiUrl}/${requestId}/comments`, { content });
  }
}