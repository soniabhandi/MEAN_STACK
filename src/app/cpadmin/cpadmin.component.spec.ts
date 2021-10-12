import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpadminComponent } from './cpadmin.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { Router } from '@angular/router';
//import { RequesturlsService } from '../requesturls.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('CpadminComponent', () => {
  let component: CpadminComponent;
  let fixture: ComponentFixture<CpadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpadminComponent ],
      imports: [HttpClientTestingModule,HttpClientModule,RouterTestingModule,FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
