import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { MainContainerComponent } from './pages/main-container/main-container.component';
import { NotFound404Component } from './pages/not-found404/not-found404.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '',
    component: MainContainerComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
