import { Routes } from '@angular/router';
import { LoginComponent } from './module/login/login.component';
import { HomeComponent } from './module/home/home.component';
import { UsersComponent } from './module/users/users.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path:'**', redirectTo: ''}
    
];
