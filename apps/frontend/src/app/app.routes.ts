import { Route } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NotesComponent } from './component/notes/notes.component';
import { SignupComponent } from './component/signup/signup.component';

export const appRoutes: Route[] = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },

    { path: 'notes', component: NotesComponent },
    {
        path:'',
        component:LayoutComponent,
        children: [
            {
                path:'dashboard',
                component:DashboardComponent,
                children: [
                    { path: '', component: NotesComponent }
                ]
            }
        ]
    }
];
