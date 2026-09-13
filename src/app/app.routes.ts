import { Routes } from '@angular/router';
import { RequestListPage } from './pages/request-list-page/request-list-page';
import { RequestDetailPage } from './pages/request-detail-page/request-detail-page';
import { FacilityListPage } from './pages/facility-list-page/facility-list-page';
import { FacilityDetailPage } from './pages/facility-detail-page/facility-detail-page';
import { LoginPage } from './pages/login-page/login-page';
import { CreateRequestForm } from './components/create-request-form/create-request-form';
import { authGuard } from './guards/auth-guard';
import { CreateFacilityForm } from './components/create-facility-form/create-facility-form';
import { RegisterPage } from './pages/register-page/register-page';
import { NotificationsPage } from './pages/notifications-page/notifications-page';
import { AssignFacilityPage } from './pages/assign-facility-page/assign-facility-page';
import { VendorListPage } from './pages/vendor-list-page/vendor-list-page';
import { VendorDetailPage } from './pages/vendor-detail-page/vendor-detail-page';
import { CreateVendorForm } from './components/create-vendor-form/create-vendor-form';

export const routes: Routes = [
    { path: 'login', component: LoginPage },
    { path: 'register', component: RegisterPage },
    { path: '', component: RequestListPage, canActivate: [authGuard] },
    { path: 'requests/new', component: CreateRequestForm, canActivate: [authGuard] },
    { path: 'requests/:id', component: RequestDetailPage, canActivate: [authGuard] },
    { path: 'facilities/new', component: CreateFacilityForm, canActivate: [authGuard] },
    { path: 'facilities', component: FacilityListPage, canActivate: [authGuard] },
    { path: 'facilities/:id', component: FacilityDetailPage, canActivate: [authGuard] },
    { path: 'notifications', component: NotificationsPage, canActivate: [authGuard] },
    { path: 'admin/assign-facility', component: AssignFacilityPage, canActivate: [authGuard] },
    { path: 'vendors', component: VendorListPage, canActivate: [authGuard] },
    { path: 'vendors/new', component: CreateVendorForm, canActivate: [authGuard] },
    { path: 'vendors/:id', component: VendorDetailPage, canActivate: [authGuard] },

]; 