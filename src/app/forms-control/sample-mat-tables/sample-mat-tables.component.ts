import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';


const ELEMENT_DATA = [
  {
    name: 'Harshita',
    age: 23,
    salary: 29.99,
    dob: new Date('1997-05-28'),
    canVote: true
  },
  {
    name: 'Jhanvi',
    age: 42,
    salary: 52.00,
    dob: new Date('1979-08-23'),
    canVote: true
  },
  {
    name: 'Manisha',
    age: 13,
    salary: 0.00,
    dob: new Date('2007-03-12'),
    canVote: false
  },
]

@Component({
  selector: 'app-sample-mat-tables',
  templateUrl: './sample-mat-tables.component.html',
  styleUrls: ['./sample-mat-tables.component.css']
})
export class SampleMatTablesComponent implements OnInit {
  displayedColumns: string[] = ['name','age','salary','dob','canVote'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  selectAll(){
    
  }

}
