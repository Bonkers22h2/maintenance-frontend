import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Facility } from '../../services/facility';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-facility-detail-page',
  styleUrl: './facility-detail-page.css',
  templateUrl: './facility-detail-page.html',
})
export class FacilityDetailPage {
  private route = inject(ActivatedRoute);
  private facilityService = inject(Facility);
  private authService = inject(Auth);

  facilityId = this.route.snapshot.paramMap.get('id')!;
  facility$ = this.facilityService.getFacilityById(this.facilityId);
  userRole = this.authService.getUserRole();

  isEditing = false;
  editName = '';
  editLocation = '';
  editFacilityType = '';

  startEdit(request: any) {
    this.isEditing = true;
    this.editName = request.name;
    this.editLocation = request.location;
    this.editFacilityType = request.facilityType;
  }

  saveEdit() {
    const dto = {
      name: this.editName,
      location: this.editLocation,
      facilityType: this.editFacilityType
    };
    this.facilityService.editFacility(this.facilityId, dto).subscribe({
      next: () => {
        this.isEditing = false;
        this.facility$ = this.facilityService.getFacilityById(this.facilityId);
      },
      error: (err) => console.error('Failed to update facility', err)
    })
  }
}
