import { SampleMatTablesComponent } from './sample-mat-tables/sample-mat-tables.component';

import { DatePickerComponent } from './date-picker/date-picker.component';
import { MatInputsComponent } from './mat-inputs/mat-inputs.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SampleMatTablesComponent,
  },
  {
    path: 'date',
    component: DatePickerComponent,
  },
  {
    path: 'inputs',
    component: MatInputsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsControlRoutingModule { }
