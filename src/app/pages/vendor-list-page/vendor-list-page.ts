import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Vendors } from '../../services/vendors';
import { Auth } from '../../services/auth';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, FormsModule, RouterLink],
  selector: 'app-vendor-list-page',
  styleUrl: './vendor-list-page.css',
  templateUrl: './vendor-list-page.html',
})
export class VendorListPage {
  private vendorService = inject(Vendors);
  private authService = inject(Auth);

  userRole = this.authService.getUserRole();
  vendors$ = this.vendorService.getVendors();
}
