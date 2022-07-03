import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StatsByProgLanguagesComponent} from './stats-by-prog-languages.component';

describe('StatsByProgLanguagesComponent', () => {
  let component: StatsByProgLanguagesComponent;
  let fixture: ComponentFixture<StatsByProgLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsByProgLanguagesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StatsByProgLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
