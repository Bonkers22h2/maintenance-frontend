import { Component, inject } from '@angular/core';
import { Notification, NotificationPage } from '../../services/notification';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, shareReplay, switchMap } from 'rxjs';

@Component({
  imports: [CommonModule],
  selector: 'app-notifications-page',
  styleUrl: './notifications-page.css',
  templateUrl: './notifications-page.html',
})
export class NotificationsPage {
  private notificationService = inject(Notification);
  private readonly pageSize = 10;
  private readonly pageIndex$ = new BehaviorSubject(0);

  notifications$ = this.pageIndex$.pipe(
    switchMap(page => this.notificationService.getNotifications(page, this.pageSize)),
    shareReplay({ bufferSize: 1, refCount: true }),
  );

  setPage(page: number, notificationPage: NotificationPage): void {
    const lastPage = Math.max(notificationPage.page.totalPages - 1, 0);
    this.pageIndex$.next(Math.min(Math.max(page, 0), lastPage));
  }

  trackByNotification(index: number, notification: { id?: number }): number {
    return notification.id ?? index;
  }

  markAsRead(id: number) {
    this.notificationService.markAsRead(id).subscribe({
      next: () => {
        this.notifications$ = this.notificationService.getNotifications();
      },
      error: (err) => console.error('Failed to mark as read', err)
    })
  }
}