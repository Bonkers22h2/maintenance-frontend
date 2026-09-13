import { Component, inject } from '@angular/core';
import { Users } from '../../services/users';
import { Facility } from '../../services/facility';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-assign-facility-page',
  styleUrl: './assign-facility-page.css',
  templateUrl: './assign-facility-page.html',
})
export class AssignFacilityPage {
  private userService = inject(Users);
  private facilityService = inject(Facility);

  tenants$ = this.userService.getTenantUsers();
  facilities$ = this.facilityService.getFacilities();
  selectedFacilityId: { [userId: string]: number } = {};

  assignFacility(userId: string) {
    const facilityId = this.selectedFacilityId[userId];
    if (!facilityId) return;

    this.userService.assignFacilityToUser(userId, facilityId).subscribe({
      next: () => {
        this.tenants$ = this.userService.getTenantUsers();
      },
      error: (err) => console.error('Failed to assign facility:', err)
    });
  }

}
