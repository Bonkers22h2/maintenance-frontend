import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaintenanceRequest } from '../../services/maintenance-request';
import { Auth } from '../../services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-detail-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './request-detail-page.html',
  styleUrl: './request-detail-page.css'
})
export class RequestDetailPage {
  private route = inject(ActivatedRoute);
  private maintenanceRequestService = inject(MaintenanceRequest);
  private authService = inject(Auth);

  requestId = this.route.snapshot.paramMap.get('id')!;
  request$ = this.maintenanceRequestService.getRequestsById(this.requestId);
  userRole = this.authService.getUserRole();

  comments$ = this.maintenanceRequestService.getComments(this.requestId);
  newCommentText = '';

  histories$ = this.maintenanceRequestService.getStatusHisotry(this.requestId);

  submitComment() {
    this.maintenanceRequestService.addComment(this.requestId, this.newCommentText).subscribe({
      next: () => {
        this.newCommentText = '';
        this.comments$ = this.maintenanceRequestService.getComments(this.requestId);
      },
      error: (err) => console.error('Failed to add comment:', err)
    });
  }

  markAssigned() {
    this.maintenanceRequestService.updateStatus(this.requestId, 'ASSIGNED').subscribe({
      next: () => {
        this.request$ = this.maintenanceRequestService.getRequestsById(this.requestId);
      },
      error: (err) => {
        console.error('Failed to update status:', err);
      }
    });
  }
}
