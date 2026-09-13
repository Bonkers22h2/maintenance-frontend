import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendors } from '../../services/vendors';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
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
}
