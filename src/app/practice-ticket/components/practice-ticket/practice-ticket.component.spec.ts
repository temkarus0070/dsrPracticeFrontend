import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PracticeTicketComponent} from './practice-ticket.component';

describe('PracticeTicketComponent', () => {
  let component: PracticeTicketComponent;
  let fixture: ComponentFixture<PracticeTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
