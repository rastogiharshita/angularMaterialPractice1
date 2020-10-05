import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleMatTablesComponent } from './sample-mat-tables.component';

describe('SampleMatTablesComponent', () => {
  let component: SampleMatTablesComponent;
  let fixture: ComponentFixture<SampleMatTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleMatTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleMatTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
