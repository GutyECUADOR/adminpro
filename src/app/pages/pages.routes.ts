import { RouterModule, Routes } from '@angular/router';

import { MainContainerComponent } from './main-container/main-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSetingsComponent } from './account-setings/account-setings.component';


const routes: Routes = [
    { path: '',
      component: MainContainerComponent,
      children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'progress', component: ProgressComponent },
        { path: 'account', component: AccountSetingsComponent },
        { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      ]
    }
  ];

export const PAGES_ROUTES = RouterModule.forChild(routes);
