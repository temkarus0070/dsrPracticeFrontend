import {TestBed} from '@angular/core/testing';

import {ProgLanguagesService} from './prog-languages.service';

describe('ProgLanguagesService', () => {
  let service: ProgLanguagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgLanguagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
