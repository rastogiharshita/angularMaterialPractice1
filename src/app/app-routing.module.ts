import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'iaa',
    loadChildren: () => import('./incident-auto-allocation/incident-auto-allocation.module')
                        .then(m => m.IncidentAutoAllocationModule)
  },
  
  {
    path: 'obs',
    loadChildren: () => import('./online-banking-system/online-banking-system.module')
                        .then(m => m.OnlineBankingSystemModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms-control/forms-control.module')
                        .then(m => m.FormsControlModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
