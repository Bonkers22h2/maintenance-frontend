import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-request-card',
  styleUrl: './request-card.css',
  templateUrl: './request-card.html',
})
export class RequestCard {
  @Input() requestId = '';
  @Input() title = '';
  @Input() status = '';
  @Input() priority = '';
  imageUrl = 'https://placehold.co/100'

  markAsRead() {
    console.log("marked as read");
  }
}


