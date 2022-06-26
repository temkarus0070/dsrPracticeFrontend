import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PracticeTicketInputFormComponent} from './practice-ticket-input-form.component';

describe('PracticeTicketInputFormComponent', () => {
  let component: PracticeTicketInputFormComponent;
  let fixture: ComponentFixture<PracticeTicketInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeTicketInputFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeTicketInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
