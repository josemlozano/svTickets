import { TestBed } from '@angular/core/testing';

import { LogoutActiveGuard } from './logout-active.guard';

describe('LogoutActiveGuard', () => {
  let guard: LogoutActiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogoutActiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
