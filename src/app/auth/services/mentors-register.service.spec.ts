import {TestBed} from '@angular/core/testing';

import {MentorsRegisterService} from './mentors-register.service';

describe('MentorsRegisterService', () => {
  let service: MentorsRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentorsRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
