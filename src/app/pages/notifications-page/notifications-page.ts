import { Component, inject } from '@angular/core';
import { Notification } from '../../services/notification';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-notifications-page',
  styleUrl: './notifications-page.css',
  templateUrl: './notifications-page.html',
})
export class NotificationsPage {
  private notificationService = inject(Notification);
  notifications$ = this.notificationService.getNotifications();
}
