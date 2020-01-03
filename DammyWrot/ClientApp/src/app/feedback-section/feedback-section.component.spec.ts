import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackSectionComponent } from './feedback-section.component';

describe('FeedbackSectionComponent', () => {
  let component: FeedbackSectionComponent;
  let fixture: ComponentFixture<FeedbackSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
