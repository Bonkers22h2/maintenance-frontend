import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MaintenanceRequest } from '../../services/maintenance-request';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-create-request-form',
  styleUrl: './create-request-form.css',
  templateUrl: './create-request-form.html',
})
export class CreateRequestForm {
  private maintenanceRequestService = inject(MaintenanceRequest);
  private router = inject(Router);

  title = '';
  description = '';
  priority = 'MEDIUM';
  errorMessage = '';

  submitForm() {
    const dto = {
      title: this.title,
      description: this.description,
      priority: this.priority
    };

    this.maintenanceRequestService.createRequest(dto).subscribe({
      next: (createdRequest) => {
        this.router.navigate(['/requests', createdRequest.id]);
      },
      error: (err) => {
        this.errorMessage = 'Failed to create requests. Please try again';
      }
    })
  }
}
