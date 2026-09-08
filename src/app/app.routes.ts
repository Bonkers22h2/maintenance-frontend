import { Routes } from '@angular/router';
import { RequestListPage } from './pages/request-list-page/request-list-page';
import { RequestDetailPage } from './pages/request-detail-page/request-detail-page';

export const routes: Routes = [
    { path: '', component: RequestListPage },
    { path: 'requests/:id', component: RequestDetailPage },
];
