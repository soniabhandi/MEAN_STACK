import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuserComponent } from './cpuser.component';

describe('CpuserComponent', () => {
  let component: CpuserComponent;
  let fixture: ComponentFixture<CpuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
