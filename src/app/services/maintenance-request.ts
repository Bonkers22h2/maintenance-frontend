import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { required } from '@angular/forms/signals';

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

  editComment(requestId: string, commentId: string, content: string) {
    return this.http.patch<any>(`${this.apiUrl}/${requestId}/comments/${commentId}`, { content });
  }

  deleteComment(requestId: string, commentId: string) {
    return this.http.delete<any>(`${this.apiUrl}/${requestId}/comments/${commentId}`);
  }

  getStatusHisotry(requestId: string) {
    return this.http.get<any>(`${this.apiUrl}/${requestId}/history`);
  }

  uploadAttachment(requestId: string, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.apiUrl}/${requestId}/attachments`, formData);
  }

  getAttachments(requestId: string) {
    return this.http.get<any>(`${this.apiUrl}/${requestId}/attachments`);
  }

  getAttachmentBlob(requestId: string, attachmentId: number) {
    return this.http.get(`${this.apiUrl}/${requestId}/attachments/${attachmentId}/download`, {
      responseType: 'blob'
    });
  }

  updateRequest(requestId: string, dto: any) {
    return this.http.put<any>(`${this.apiUrl}/${requestId}`, dto);
  }

  assignStaff(requestId: string, staffId: number) {
    return this.http.patch<any>(`${this.apiUrl}/${requestId}/assign`, { staffId });
  }
}