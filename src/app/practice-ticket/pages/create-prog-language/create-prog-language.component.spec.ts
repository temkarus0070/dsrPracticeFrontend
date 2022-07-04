import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateProgLanguageComponent} from './create-prog-language.component';

describe('CreateProgLanguageComponent', () => {
  let component: CreateProgLanguageComponent;
  let fixture: ComponentFixture<CreateProgLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateProgLanguageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateProgLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
