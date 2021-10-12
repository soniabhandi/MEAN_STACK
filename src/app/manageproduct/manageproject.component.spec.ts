import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageprojectComponent } from './manageproject.component';

describe('ManageprojectComponent', () => {
  let component: ManageprojectComponent;
  let fixture: ComponentFixture<ManageprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
