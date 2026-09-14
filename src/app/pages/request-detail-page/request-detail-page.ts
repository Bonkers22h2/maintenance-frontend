import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaintenanceRequest } from '../../services/maintenance-request';
import { Auth } from '../../services/auth';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Users } from '../../services/users';
import { CommentTriviaType } from '@angular/compiler';
import { Vendors } from '../../services/vendors';


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
  private userService = inject(Users);
  private vendorService = inject(Vendors);
  staffUsers$ = this.userService.getStaffUsers();
  vendors$ = this.vendorService.getVendors();
  selectedStaffId: number | null = null;
  selectedVendorId: number | null = null;

  requestId = this.route.snapshot.paramMap.get('id')!;
  request$ = this.maintenanceRequestService.getRequestsById(this.requestId);
  userRole = this.authService.getUserRole();

  comments$ = this.maintenanceRequestService.getComments(this.requestId);
  newCommentText = '';

  histories$ = this.maintenanceRequestService.getStatusHisotry(this.requestId);

  selectedFile: File | null = null;
  attachments$ = this.maintenanceRequestService.getAttachments(this.requestId);
  private sanitizer = inject(DomSanitizer);
  imageUrls: Map<number, any> = new Map();

  isEditing = false;
  editTitle = '';
  editDescription = '';
  editPriority = '';

  editingCommentId: number | null = null;
  isEditingComment = false;
  editComment = '';

  startEditComment(comment: any) {
    this.isEditingComment = true;
    this.editingCommentId = comment.id;
    this.editComment = comment.content;
  }

  saveEditComment() {
    if (!this.editingCommentId) return;

    this.maintenanceRequestService.editComment(this.requestId, this.editingCommentId.toString(), this.editComment).subscribe({
      next: () => {
        this.isEditingComment = false;
        this.comments$ = this.maintenanceRequestService.getComments(this.requestId);
      },
      error: (err) => console.error('Failed to edit comment:', err)
    })
  }

  startEdit(request: any) {
    this.isEditing = true;
    this.editTitle = request.title;
    this.editDescription = request.description;
    this.editPriority = request.priority;
  }

  saveEdit() {
    const dto = {
      title: this.editTitle,
      description: this.editDescription,
      priority: this.editPriority
    };
    this.maintenanceRequestService.updateRequest(this.requestId, dto).subscribe({
      next: () => {
        this.isEditing = false;
        this.request$ = this.maintenanceRequestService.getRequestsById(this.requestId);
      },
      error: (err) => console.error('Failed to update request', err)
    })
  }

  deleteComment(commentId: number) {
    this.maintenanceRequestService.deleteComment(this.requestId, commentId.toString()).subscribe({
      next: () => {
        this.comments$ = this.maintenanceRequestService.getComments(this.requestId);
      },
      error: (err) => console.error('Failed to delete comment', err)
    })
  }

  submitComment() {
    this.maintenanceRequestService.addComment(this.requestId, this.newCommentText).subscribe({
      next: () => {
        this.newCommentText = '';
        this.comments$ = this.maintenanceRequestService.getComments(this.requestId);
      },
      error: (err) => console.error('Failed to add comment:', err)
    })
  }

  assignStaffToRequest() {
    if (!this.selectedStaffId) return;

    this.maintenanceRequestService.assignStaff(this.requestId, this.selectedStaffId).subscribe({
      next: () => {
        this.request$ = this.maintenanceRequestService.getRequestsById(this.requestId);
      },
      error: (err) => console.error('Failed to assign staff:', err)
    })
  }

  assignVendorToRequest() {
    if(!this.selectedVendorId) return;

    this.maintenanceRequestService.assignVendor(this.requestId, this.selectedVendorId).subscribe({
      next: () => {
        this.request$ = this.maintenanceRequestService.getRequestsById(this.requestId);
      },
      error: (err) => console.error('Failed to assign vendor:', err)
    })
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

  markAsInProgress() {
    this.maintenanceRequestService.updateStatus(this.requestId, 'IN_PROGRESS').subscribe({
      next: () => {
        this.request$ = this.maintenanceRequestService.getRequestsById(this.requestId);
      },
      error: (err) => {
        console.error('Failed to update status:', err);
      }
    })
  }

  markAsResolved() {
    this.maintenanceRequestService.updateStatus(this.requestId, 'RESOLVED').subscribe({
      next: () => {
        this.request$ = this.maintenanceRequestService.getRequestsById(this.requestId);
      },
      error: (err) => {
        console.error('Failed to update status:', err);
      }
    })
  }



  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  uploadAttachment() {
    if (!this.selectedFile) return;

    this.maintenanceRequestService.uploadAttachment(this.requestId, this.selectedFile).subscribe({
      next: () => {
        this.selectedFile = null;
        this.attachments$ = this.maintenanceRequestService.getAttachments(this.requestId);
      },
      error: (err) => console.error('Upload failed:', err)
    })
  }

  deleteAttachment(attachmentId: number) {
    this.maintenanceRequestService.deleteAttachment(this.requestId, attachmentId.toString()).subscribe({
      next: () => {
        this.attachments$ = this.maintenanceRequestService.getAttachments(this.requestId);
      },
      error: (err) => console.error('Failed to delete attachment:', err)
    })
  }

  loadImage(attachmentId: number) {
    this.maintenanceRequestService.getAttachmentBlob(this.requestId, attachmentId).subscribe(blob => {
      const url = URL.createObjectURL(blob);
      this.imageUrls.set(attachmentId, this.sanitizer.bypassSecurityTrustUrl(url));
    });
  }

}
