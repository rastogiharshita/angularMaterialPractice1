import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  priority: string[] = ['High', 'Medium','Low'];
  departments: {'id':number, 'name': string}[] = [
    {'id': 1, 'name': 'ITID'},
    {'id': 2, 'name': 'Data Services'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getDepartmentName(department){
    return department ? department.name : undefined;
  }

}
