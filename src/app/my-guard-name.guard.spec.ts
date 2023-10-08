import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { myGuardNameGuard } from './my-guard-name.guard';

describe('myGuardNameGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => myGuardNameGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
