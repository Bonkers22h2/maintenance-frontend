import { Component, inject } from '@angular/core';
import { Facility } from '../../services/facility';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-create-facility-form',
  styleUrl: './create-facility-form.css',
  templateUrl: './create-facility-form.html',
})
export class CreateFacilityForm {
  private facilityService = inject(Facility);
  private router = inject(Router);

  name = '';
  location = '';
  facilityType = 'ROOM';
  errorMessage ='';

  submitForm() {
    const dto = {
      name: this.name,
      location: this.location,
      facilityType: this.facilityType
    };

    this.facilityService.createFacility(dto).subscribe({
      next: (createdFacility) => {
        this.router.navigate(['/facilities', createdFacility.id]);
      },
      error: (err) => {
        this.errorMessage = 'Failed to create facility. Please try again';
      }
    })

  }
}
