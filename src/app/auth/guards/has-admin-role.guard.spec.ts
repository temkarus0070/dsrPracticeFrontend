import {TestBed} from '@angular/core/testing';

import {HasAdminRoleGuard} from './has-admin-role.guard';

describe('HasAdminRoleGuard', () => {
  let guard: HasAdminRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasAdminRoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
