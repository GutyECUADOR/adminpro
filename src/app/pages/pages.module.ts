

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modulos */
import { SharedModule } from './../shared/shared.module';

/* Rutas */
import { PAGES_ROUTES } from './pages.routes';

import { LoginComponent } from './login/login.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { RegisterComponent } from './register/register.component';
import { MainContainerComponent } from './main-container/main-container.component';


@NgModule({
  declarations: [
    MainContainerComponent,
    LoginComponent,
    NotFound404Component,
    DashboardComponent,
    ProgressComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES
  ],
  exports: [
    MainContainerComponent,
    LoginComponent,
    NotFound404Component,
    DashboardComponent,
    ProgressComponent,
    RegisterComponent
  ],
})
export class PagesModule { }
