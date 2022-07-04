import {TestBed} from '@angular/core/testing';

import {ProgLangService} from './prog-lang.service';

describe('ProgLangService', () => {
  let service: ProgLangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgLangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
