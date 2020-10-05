import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DialogsComponent } from './../../popups-modals/dialogs/dialogs.component';

@Component({
  selector: 'app-mat-inputs',
  templateUrl: './mat-inputs.component.html',
  styleUrls: ['./mat-inputs.component.css']
})
export class MatInputsComponent implements OnInit {

  sampleForm: FormGroup = this._fb.group({
    'sampleEmail': ['',Validators.email]
  });

  constructor(private _fb: FormBuilder, private _dialog: MatDialog, private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openDialog(){
    let dialogRef = this._dialog.open(DialogsComponent,{
      height: '50%',
      width: '50%',
      data: {} // can be use to send data to Modal
    });
    dialogRef.afterClosed().subscribe(result => {
      let snackbarRef = this._snackbar.open('Dialog is closed.','Close',{
        duration: 2000,
        panelClass: ['mat-sidenav','mat-primary']
      });
    })
  }

}
