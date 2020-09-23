import { CustomDateAdapter, CUSTOM_DATE_FORMATS } from './../../shared/date-picker.format';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [
    {provide: DateAdapter, useClass: CustomDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS}
  ]
})
export class DatePickerComponent implements OnInit {

  minDate: Date = new Date();
  sampleForm: FormGroup;
  
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.sampleForm = this._fb.group({
      'sampleDate': ['',Validators.required]
    });
  }

}
