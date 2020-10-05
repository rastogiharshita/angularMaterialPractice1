import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { PopupsModalsRoutingModule } from './popups-modals-routing.module';
import { DialogsComponent } from './dialogs/dialogs.component';

// Material Components
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [DialogsComponent],
  imports: [
    CommonModule,
    PopupsModalsRoutingModule,
    SharedModule,

    // Material Components
    MatDialogModule
  ]
})
export class PopupsModalsModule { }
