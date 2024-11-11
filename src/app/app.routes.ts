import { Routes } from '@angular/router';
import { LoginComponent } from './module/login/login.component';
import { HomeComponent } from './module/home/home.component';
import { UsersComponent } from './module/users/users.component';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
    { path: '', redirectTo: '/login', pathMatch: 'full' }, 
    { path: '**', redirectTo: '/login' }

    
];
