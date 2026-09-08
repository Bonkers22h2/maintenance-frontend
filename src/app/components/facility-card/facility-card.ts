import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-facility-card',
  styleUrl: './facility-card.css',
  templateUrl: './facility-card.html',
})
export class FacilityCard {
  @Input() name = '';
  @Input() location = '';
  @Input() facilityType = '';
}
