import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class Users {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8080/api/users'

    getStaffUsers() {
        return this.http.get<any[]>(`${this.apiUrl}/staff`);
    }
}
