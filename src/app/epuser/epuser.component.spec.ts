import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpuserComponent } from './epuser.component';

describe('EpuserComponent', () => {
  let component: EpuserComponent;
  let fixture: ComponentFixture<EpuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
