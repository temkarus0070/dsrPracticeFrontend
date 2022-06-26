import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MentorInputFormComponent} from './mentor-input-form.component';

describe('MentorInputFormComponent', () => {
  let component: MentorInputFormComponent;
  let fixture: ComponentFixture<MentorInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorInputFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
