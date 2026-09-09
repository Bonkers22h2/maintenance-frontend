import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map } from 'rxjs';
@Service()
export class Facility {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8080/api/facilities';

    getFacilities() {
        return this.http.get<any>(this.apiUrl).pipe(
            map(response => response.content)
        );
    }

    createFacility(dto: any) {
        return this.http.post<any>(this.apiUrl, dto);
    }
}
