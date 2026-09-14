import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendors } from '../../services/vendors';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-vendor-detail-page',
  styleUrl: './vendor-detail-page.css',
  templateUrl: './vendor-detail-page.html',
})
export class VendorDetailPage {
  private route = inject(ActivatedRoute);
  private vendorService = inject(Vendors);
  private authService = inject(Auth);
  private router = inject(Router);

  vendorId = this.route.snapshot.paramMap.get('id')!;
  vendors$ = this.vendorService.getVendorById(this.vendorId);
  userRole = this.authService.getUserRole();

  isEditing = false;
  editName = '';
  editSpecialty = '';
  editContactNumber ='';
  editEmail = '';

  startEdit(request: any) {
    this.isEditing = true;
    this.editName = request.name;
    this.editSpecialty = request.specialty;
    this.editContactNumber = request.contactNumber;
    this.editEmail = request.email;
  }

  saveEdit() {
    const dto = {
      name: this.editName,
      specialty: this.editSpecialty,
      contactNumber: this.editContactNumber,
      email: this.editEmail
    };
    this.vendorService.updateVendor(this.vendorId, dto).subscribe({
      next: () => {
        this.isEditing = false;
        this.vendors$ = this.vendorService.getVendorById(this.vendorId);
      },
      error: (err) => console.error('Failed to update vendor', err)
    })
  }

  deleteVendor(){
    this.vendorService.deleteVendor(this.vendorId).subscribe({
      next: () => {
        this.router.navigate(['/vendors']);
      },
      error: (err) => console.error('Failed to delete vendor', err)
    })
  }
}
