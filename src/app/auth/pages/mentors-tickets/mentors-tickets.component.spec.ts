import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MentorsTicketsComponent} from './mentors-tickets.component';

describe('MentorsTicketsComponent', () => {
  let component: MentorsTicketsComponent;
  let fixture: ComponentFixture<MentorsTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MentorsTicketsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MentorsTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
