import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { FormsControlRoutingModule } from './forms-control-routing.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MatInputsComponent } from './mat-inputs/mat-inputs.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

// Material Components
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [AutocompleteComponent, MatInputsComponent, DatePickerComponent],
  imports: [
    CommonModule,
    FormsControlRoutingModule,
    SharedModule,

    // Material Components
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatMomentDateModule
  ]
})
export class FormsControlModule { }
