import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineBankingSystemRoutingModule } from './online-banking-system-routing.module';
import { ObsHomeComponent } from './obs-home/obs-home.component';


@NgModule({
  declarations: [ObsHomeComponent],
  imports: [
    CommonModule,
    OnlineBankingSystemRoutingModule
  ]
})
export class OnlineBankingSystemModule { }
