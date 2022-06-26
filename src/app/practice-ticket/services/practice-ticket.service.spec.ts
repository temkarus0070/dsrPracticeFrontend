import {TestBed} from '@angular/core/testing';

import {PracticeTicketService} from './practice-ticket.service';

describe('PracticeTicketService', () => {
  let service: PracticeTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticeTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
