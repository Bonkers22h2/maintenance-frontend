import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class Notification {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8080/api/notifications'

    getNotifications() {
        return this.http.get<any[]>(this.apiUrl);
    }
}
