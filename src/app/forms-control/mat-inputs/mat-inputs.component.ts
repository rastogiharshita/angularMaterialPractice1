import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mat-inputs',
  templateUrl: './mat-inputs.component.html',
  styleUrls: ['./mat-inputs.component.css']
})
export class MatInputsComponent implements OnInit {

  sampleForm: FormGroup = this._fb.group({
    'sampleEmail': ['',Validators.email]
  });

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
