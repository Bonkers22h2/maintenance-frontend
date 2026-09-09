import { Routes } from '@angular/router';
import { RequestListPage } from './pages/request-list-page/request-list-page';
import { RequestDetailPage } from './pages/request-detail-page/request-detail-page';
import { FacilityListPage } from './pages/facility-list-page/facility-list-page';
import { FacilityDetailPage } from './pages/facility-detail-page/facility-detail-page';
import { LoginPage } from './pages/login-page/login-page';
import { CreateRequestForm } from './components/create-request-form/create-request-form';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: 'login', component: LoginPage },
    { path: '', component: RequestListPage, canActivate: [authGuard] },
    { path: 'requests/new', component: CreateRequestForm, canActivate: [authGuard] },
    { path: 'requests/:id', component: RequestDetailPage, canActivate: [authGuard] },
    { path: 'facilities', component: FacilityListPage, canActivate: [authGuard] },
    { path: 'facilities/:id', component: FacilityDetailPage, canActivate: [authGuard] }
];