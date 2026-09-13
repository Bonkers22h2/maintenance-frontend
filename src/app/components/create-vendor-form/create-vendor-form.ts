import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Vendors } from '../../services/vendors';
import { Router } from '@angular/router';
@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-create-vendor-form',
  styleUrl: './create-vendor-form.css',
  templateUrl: './create-vendor-form.html',
})
export class CreateVendorForm {
  private vendorService = inject(Vendors);
  private router = inject(Router);

  name = '';
  email = '';
  contactNumber ='';
  specialty = '';
  errorMessage = '';

  submitForm() {
    const dto = {
      name: this.name,
      email: this.email,
      contactNumber: this.contactNumber,
      specialty: this.specialty
    };

    this.vendorService.createVendor(dto).subscribe({
      next: (createVendor) => {
        this.router.navigate(['/vendors', createVendor.id]);
      },
      error: (err) => {
        this.errorMessage = 'Failed to create vendor. Please try again';
      }
    })
  }

}
