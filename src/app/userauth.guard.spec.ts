import { TestBed } from '@angular/core/testing';

import { UserauthGuard } from './userauth.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserauthGuard', () => {
  let guard: UserauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(UserauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
