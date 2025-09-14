import { Routes } from '@angular/router';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { SetNewPasswordComponent } from './auth/set-new-password/set-new-password.component';
import { ForgotPasswordVerifyCodeComponent } from './auth/forgot-password-verify-code/forgot-password-verify-code.component';

import { authGuard } from './auth.guard';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { TasksComponent } from './features/tasks/tasks.component';
import { CalendarComponent } from './features/calendar/calendar.component';
import { InboxComponent } from './features/inbox/inbox.component';
import { TeamsComponent } from './features/teams/teams.component';
import { FilesComponent } from './features/files/files.component';
import { ReportsComponent } from './features/reports/reports.component';
import { SettingsComponent } from './features/settings/settings.component';
import { LogoutComponent } from './features/logout/logout.component';
import { ActivityComponent } from './features/activity/activity.component';
import { NotificationsComponent } from './features/notifications/notifications.component';
import { AddUserComponent } from './features/add-user/add-user.component';
import { AddtaskComponent } from './features/addtask/addtask.component';
import { ShowAllUsersComponent } from './features/show-all-users/show-all-users.component';

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
            {path:'dashboard', component:DashboardComponent},
            {path:'projects', component:ProjectsComponent},
            {path:'add-user',component:AddUserComponent},
            {path:'show-users',component:ShowAllUsersComponent},
            {path:'add-task',component:AddtaskComponent},
            {path:'tasks', component:TasksComponent},
            {path:'calendar', component:CalendarComponent},
            {path:'inbox', component:InboxComponent},
            {path:'teams', component:TeamsComponent},
            {path:'files', component:FilesComponent},
            {path:'reports', component:ReportsComponent},
            {path:'notifications',component:NotificationsComponent},
            {path:'activity', component:ActivityComponent},
            {path:'settings', component:SettingsComponent},
            {path:'logout', component:LogoutComponent},
        ]
        
    },
    { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    { path: '**', redirectTo: 'sign-in' }
];
