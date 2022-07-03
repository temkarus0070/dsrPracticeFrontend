import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StatsByStudentsComponent} from './stats-by-students.component';

describe('StatsByStudentsComponent', () => {
  let component: StatsByStudentsComponent;
  let fixture: ComponentFixture<StatsByStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsByStudentsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StatsByStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
