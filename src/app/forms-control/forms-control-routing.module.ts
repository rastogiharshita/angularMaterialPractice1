import { DatePickerComponent } from './date-picker/date-picker.component';
import { MatInputsComponent } from './mat-inputs/mat-inputs.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DatePickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsControlRoutingModule { }
