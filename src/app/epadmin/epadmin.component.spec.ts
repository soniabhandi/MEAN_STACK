import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpadminComponent } from './epadmin.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { Router } from '@angular/router';
//import { RequesturlsService } from '../requesturls.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('EpadminComponent', () => {
  let component: EpadminComponent;
  let fixture: ComponentFixture<EpadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpadminComponent ],
      imports: [HttpClientTestingModule,HttpClientModule,RouterTestingModule,FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
