import { DialogsComponent } from './../popups-modals/dialogs/dialogs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { FormsControlRoutingModule } from './forms-control-routing.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MatInputsComponent } from './mat-inputs/mat-inputs.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { SampleMatTablesComponent } from './sample-mat-tables/sample-mat-tables.component';

// Material Components
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AutocompleteComponent,
    MatInputsComponent,
    DatePickerComponent,
    SampleMatTablesComponent
  ],
  entryComponents: [
    DialogsComponent
  ],
  imports: [
    CommonModule,
    FormsControlRoutingModule,
    SharedModule,

    // Material Components
    MatAutocompleteModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatMomentDateModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
  ]
})
export class FormsControlModule { }
