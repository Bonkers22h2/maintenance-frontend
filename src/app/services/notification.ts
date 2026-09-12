import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { HttpParams } from '@angular/common/http';

export interface NotificationItem {
    id?: number;
    createdAt: string;
    message: string;
    maintenanceRequest?: string | number;
}

export interface NotificationPage {
    content: NotificationItem[];
    totalElements: number;
    totalPages: number;
    number: number;
    size: number;
}

@Service()
export class Notification {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8080/api/notifications'

    getNotifications(page = 0, size = 10) {
        const params = new HttpParams()
            .set('page', page)
            .set('size', size);

        return this.http.get<NotificationPage>(this.apiUrl, { params });
    }
}
