import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInputsComponent } from './mat-inputs.component';

describe('MatInputsComponent', () => {
  let component: MatInputsComponent;
  let fixture: ComponentFixture<MatInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
