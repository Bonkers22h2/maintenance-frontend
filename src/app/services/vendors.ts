import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map } from 'rxjs';

@Service()
export class Vendors {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8080/api/vendors'

    getVendors() {
        return this.http.get<any>(this.apiUrl).pipe(
            map(response => response.content)
        )
    }

    getVendorById(id: string) {
        return this.http.get<any>(`${this.apiUrl}/${id}`)
    }

    createVendor(dto: any) {
        return this.http.post<any>(this.apiUrl, dto);
    }

    updateVendor(id: string, dto: any) {
        return this.http.put<any>(`${this.apiUrl}/${id}`, dto )
    }

    deleteVendor(id: string) {
        return this.http.delete<any>(`${this.apiUrl}/${id}`)
    }
}
