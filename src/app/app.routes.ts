import { Routes } from '@angular/router';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { SetNewPasswordComponent } from './auth/set-new-password/set-new-password.component';
import { ForgotPasswordVerifyCodeComponent } from './auth/forgot-password-verify-code/forgot-password-verify-code.component';

import { authGuard } from './auth.guard';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'sign-in', component: LoginComponent },
    { path: 'sign-up', component: SignupPageComponent},
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'verify-code' , component:ForgotPasswordVerifyCodeComponent},
    { path: 'set-new-password', component: SetNewPasswordComponent },
    { path: '' ,
        loadComponent: () => import('./core/dashboard-layout/dashboard-layout.component').then(m => m.DashboardLayoutComponent),
        canActivate: [authGuard],
        children:[
            {path:'dashboard', component:DashboardComponent}
        ]
        
    },
    { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    { path: '**', redirectTo: 'sign-in' }
];
