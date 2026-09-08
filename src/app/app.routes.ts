import { Routes } from '@angular/router';
import { RequestListPage } from './pages/request-list-page/request-list-page';
import { RequestDetailPage } from './pages/request-detail-page/request-detail-page';
import { FacilityListPage } from './pages/facility-list-page/facility-list-page';
import { FacilityDetailPage } from './pages/facility-detail-page/facility-detail-page';
export const routes: Routes = [
    { path: '', component: RequestListPage },
    { path: 'requests/:id', component: RequestDetailPage },
    { path: 'facilities', component: FacilityListPage},
    { path: 'facilities/:id', component: FacilityDetailPage}
];
