import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaaHomeComponent } from './iaa-home.component';

describe('IaaHomeComponent', () => {
  let component: IaaHomeComponent;
  let fixture: ComponentFixture<IaaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
