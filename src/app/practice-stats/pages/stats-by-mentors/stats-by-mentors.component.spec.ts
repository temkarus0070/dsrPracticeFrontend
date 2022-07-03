import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StatsByMentorsComponent} from './stats-by-mentors.component';

describe('StatsByMentorsComponent', () => {
  let component: StatsByMentorsComponent;
  let fixture: ComponentFixture<StatsByMentorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsByMentorsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StatsByMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
