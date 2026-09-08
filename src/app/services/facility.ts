import { Service } from '@angular/core';

@Service()
export class Facility {
    private facilities = [
        { id: 1, name: 'Room 214B', location: 'Dorm A, 2nd Floor', facilityType: 'ROOM' },
        { id: 2, name: 'Building A - Common Lounge', location: 'Dorm Building A, Ground Floor', facilityType: 'COMMON_AREA' },
        { id: 3, name: 'Utility Room 3', location: 'Dorm Building A, Basement', facilityType: 'UTILITY' }
    ];

    getFacilities() {
        return this.facilities;
    }
}
