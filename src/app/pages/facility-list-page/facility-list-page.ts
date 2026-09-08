import { Component, signal, inject } from '@angular/core';
import { FacilityCard } from '../../components/facility-card/facility-card';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Facility } from '../../services/facility';
import { FormsModule } from "@angular/forms";

@Component({
  imports: [RouterLink, CommonModule, FormsModule, FacilityCard],
  selector: 'app-facility-list-page',
  styleUrl: './facility-list-page.css',
  templateUrl: './facility-list-page.html',
})
export class FacilityListPage {
  protected readonly title = signal('facility-frontend');
  private facilityService = inject(Facility);
  facilities = this.facilityService.getFacilities();
}
