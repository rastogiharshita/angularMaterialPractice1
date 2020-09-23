import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidentAutoAllocationRoutingModule } from './incident-auto-allocation-routing.module';
import { IaaHomeComponent } from './iaa-home/iaa-home.component';


@NgModule({
  declarations: [IaaHomeComponent],
  imports: [
    CommonModule,
    IncidentAutoAllocationRoutingModule
  ]
})
export class IncidentAutoAllocationModule { }
